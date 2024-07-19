import React from "react";
interface TradingSettings {
  id: number;
  mm_settings_id: number;
  exchange: string;
  open_key: string;
  private_key: string;
  password: string;
  start_sell: number;
  start_buy: number;
  high_sell: number;
  low_buy: number;
  price_step_min: number;
  price_step_max: number;
  amount_min: number;
  amount_max: number;
  amount_step_min: number;
  amount_step_max: number;
}

interface TradingSettingsProps {
  data: TradingSettings;
  return: Function;
  visState: boolean;
}

const InnerLiquidSettings: React.FC<TradingSettingsProps> = (props) => {
  const formFields = Object.entries(props.data).map(([key, value]) => ({
    label: key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    value,
    id: key,
  }));

  return (
    <div style={{
        display: props.visState ? "flex" : 'none'
    }}>
      <div
        className="cursor-pointer"
        onClick={() =>
          props.return({
            id: NaN,
            name: "",
            email: "",
            pairs: [],
            lastSeenOnline: "",
          })
        }
      >
        ←
      </div>
      <form style={formStyle}>
        {formFields.map((field, index) => (
          <div key={index} style={inputContainerStyle}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              type={typeof field.value === "boolean" ? "checkbox" : "text"}
              id={field.id}
              value={field.value}
              readOnly
            />
          </div>
        ))}
      </form>
    </div>
  );
};

const formStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
};

const inputContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export default InnerLiquidSettings;
