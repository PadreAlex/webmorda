import React, { useState } from "react";
import InnerLiquidSettings from "./innerLiquidSettings";
import { convertMMSettings } from "../../helpers/convertInnerMMSettings";

export type skipMode = "buy" | "sell" | "both";
export interface MMSettingsAdminConnection {
  id: number;
  manager_id: number;
  on_off_bot: boolean;
  exchange: string;
  open_key: string;
  private_key: string;
  password: string;
}

export interface MMSettingsSettings {
  mindif: number;
  spread_mindif: number;
  dont_trade_price_max: number;
  dont_trade_price_min: number;
  precision_amount: number;
  buy_before_sell_min: number;
  buy_before_sell_max: number;
  trade_type: number;
  min_count_of_orders: number;
  max_count_of_orders: number;
  pair: string;
  volume_to_trade_per_day_max: number;
  volume_to_trade_per_day_min: number;
  precision_price: number;
  min_exchange_amount: number;
  dont_check_amount: number;
  is_reverse_on: boolean;
  restart_after_stop: boolean;
}

export interface MMSettingsSpread {
  is_spread_skip_on: boolean;
  spread_skip_sell_one: number;
  spread_skip_sell_sum: number;
  spread_skip_buy_one: number;
  spread_skip_buy_sum: number;
  spread_skip_mode: string;
  spread_skip_sell_skipped_amount: number;
  spread_skip_buy_skipped_amount: number;
}
export interface MMSettingsVolume {
  volume_increasing_ratio: number;
  alternative_account_trading_mode: boolean;
  cancel_tail_orders: boolean;
}
export interface MMSettingsSuperAdmin {
  alternative_account_open_key: string;
  alternative_account_private_key: string;
  alternative_account_pair: string;
}
export interface MMSettingsDynamicBook {
  dynamic_order_book_is_on: boolean;
  dynamic_order_book_mode: string;
  dynamic_order_book_end_sell: number;
  dynamic_order_book_start_sell: number;
  dynamic_order_book_price_step_min_sell: number;
  dynamic_order_book_price_step_max_sell: number;
  dynamic_order_book_count_of_orders_sell: number;
  dynamic_order_book_pause_between_orders_sell: number;
  dynamic_order_book_pause_between_cycles_sell: number;
  dynamic_order_book_end_buy: number;
  dynamic_order_book_start_buy: number;
  dynamic_order_book_price_step_min_buy: number;
  dynamic_order_book_price_step_max_buy: number;
  dynamic_order_book_count_of_orders_buy: number;
  dynamic_order_book_pause_between_orders_buy: number;
  dynamic_order_book_pause_between_cycles_buy: number;
}
export interface MMSettings {
  connectionSettings: MMSettingsAdminConnection;
  mmSettings: MMSettingsSettings;
  spread: MMSettingsSpread;
  volumes: MMSettingsVolume;
  alternativeAccess: MMSettingsSuperAdmin;
  dynamicBook: MMSettingsDynamicBook;
}

const testData = {
  id: 1,
  mm_settings_id: 9876543210,
  exchange: "Kraken",
  open_key: "openkey123",
  private_key: "privatekey456",
  password: "mypassword",
  start_sell: 45000.0,
  start_buy: 30000.0,
  high_sell: 50000.0,
  low_buy: 25000.0,
  price_step_min: 0.1,
  price_step_max: 1.0,
  amount_min: 0.001,
  amount_max: 1.0,
  amount_step_min: 0.01,
  amount_step_max: 0.1,
};

interface SettingsProps {
  data: MMSettings;
  return: Function;
}

const randomData = [
  {
    id: 1,
    amount: "1000$",
    side: "buy",
    price: "0.00124$",
  },
  {
    id: 2,
    amount: "666$",
    side: "hell",
    price: "0.666$",
  },
  {
    id: 3,
    amount: "992$",
    side: "buy",
    price: "0.001424$",
  },
  {
    id: 4,
    amount: "240$",
    side: "sell",
    price: "0.00124$",
  },
];

const InnerMMSettings: React.FC<SettingsProps> = (props) => {
  const [isMMVisible, setMMVisible] = useState(false);
  const [isLiquidVisible, setLiquidVisible] = useState(false);

  const user = {
    admin: false,
  };

  const customForm = convertMMSettings(props.data);

  return (
    <div
      className="rounded-[20px] shadow-[5px_10px_10px]"
      style={{
        width: "75vw",
        backgroundColor: "white",
        margin: "auto",
        padding: "20px 20px 20px 20px",
        border: "1px black solid",
        maxHeight: "75vh",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignContent: "space-between",
          justifyContent: "space-around",
        }}
      >
        <div
          className="cursor-pointer"
          onClick={() => {
            if (isLiquidVisible || isMMVisible) {
              setMMVisible(false);
              setLiquidVisible(false);
            } else {
              props.return({
                id: NaN,
                name: "",
                email: "",
                pairs: [],
                lastSeenOnline: "",
              });
            }
          }}
        >
          ←
        </div>
        <button
          className="cursor-pointer"
          onClick={() => {
            setMMVisible(!isMMVisible);
            setLiquidVisible(false);
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          MM Settings
        </button>
        <button
          className="cursor-pointer"
          onClick={() => {
            setMMVisible(false);
            setLiquidVisible(!isLiquidVisible);
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          Liquid Settings
        </button>
      </div>
      <InnerLiquidSettings
        visState={isLiquidVisible}
        data={testData}
        return={props.return}
      />
      <form
        style={{
          //   display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          display: isMMVisible ? "grid" : "none",
        }}
      >
        <form>
          {customForm.map((section, sectionIndex) => (
            <div
              style={
                (section.isAdmin && user.admin) ||
                (!section.isAdmin && !user.admin) || (!section.isAdmin && user.admin)
                  ? {}
                  : { display: "none" }
              }
              key={sectionIndex}
            >
              <h3>{section.section}</h3>
              {section.fields.map((field, index) => (
                <div key={index} style={inputContainerStyle}>
                  <label htmlFor={field.id}>{field.label}</label>
                  {field.type === "select" ? (
                    <select id={field.id} defaultValue={field.value as string}>
                      <option value="buy">Buy</option>
                      <option value="sell">Sell</option>
                      <option value="both">Both</option>
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      defaultValue={
                        field.type === "checkbox"
                          ? undefined
                          : (field.value as string | number)
                      }
                      defaultChecked={
                        field.type === "checkbox"
                          ? (field.value as boolean)
                          : undefined
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </form>
      </form>

      <div
        style={{
          display: isMMVisible || isLiquidVisible ? "none" : "inline",
          //   display: "flex",
          //   flexDirection: "row",
        }}
      >
        <div style={{}}>Open trades</div>
        <div>
          {randomData.map((data) => (
            <div
              className="rounded-[10px] shadow-[5px_10px_10px]"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "20px",
                backgroundColor: "white",
                padding: "10px",
                border: "1px black solid",
              }}
            >
              <div>Pair: {props.data.mmSettings.pair}</div>
              <div>amount: {data.amount}</div>
              <div>side: {data.side}</div>
              <div>price: {data.price}</div>
              <input type="checkbox" name="" id={`${data.id}`} />
            </div>
          ))}

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <button
              className="cursor-pointer"
              style={{
                backgroundColor: "transparent",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            >
              close selected
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export default InnerMMSettings;
