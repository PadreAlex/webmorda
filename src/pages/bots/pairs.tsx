import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { mainColor, selectColor } from "../../const-colors";
import SideBar from "../../sidebar/sidebar";
import PopupClass from "../popup/popup";
import { useEffect, useState } from "react";
import InnerUsers from "../inner/innerUsers";
import PairsTable from "./tablePairs";
import InnerMMSettings, {
  MMSettings,
  skipMode,
} from "../inner/innerMMsettings";

const mockData: MMSettings[] = [
  {
    connectionSettings: {
      id: 123,
      manager_id: 456,
      on_off_bot: true,
      exchange: "Binance",
      open_key: "abcd1234openkey",
      private_key: "efgh5678privatekey",
      password: "securepassword",
    },
    mmSettings: {
      mindif: 0.01,
      spread_mindif: 0.02,
      dont_trade_price_max: 50000.0,
      dont_trade_price_min: 10000.0,
      precision_amount: 0.0001,
      buy_before_sell_min: 0.1,
      buy_before_sell_max: 1.0,
      trade_type: 1,
      min_count_of_orders: 5,
      max_count_of_orders: 20,
      pair: "BTC/USDT",
      volume_to_trade_per_day_max: 100.0,
      volume_to_trade_per_day_min: 10.0,
      precision_price: 0.01,
      min_exchange_amount: 0.001,
      dont_check_amount: 0.01,
      is_reverse_on: false,
      restart_after_stop: false,
    },
    spread: {
      is_spread_skip_on: true,
      spread_skip_sell_one: 0.005,
      spread_skip_sell_sum: 0.01,
      spread_skip_buy_one: 0.003,
      spread_skip_buy_sum: 0.007,
      spread_skip_mode: "buy" as skipMode,
      spread_skip_sell_skipped_amount: 0.002,
      spread_skip_buy_skipped_amount: 0.004,
    },
    volumes: {
      volume_increasing_ratio: 1.5,
      alternative_account_trading_mode: false,
      cancel_tail_orders: true,
    },
    alternativeAccess: {
      alternative_account_open_key: "altopenkey5678",
      alternative_account_private_key: "altprivatekey1234",
      alternative_account_pair: "ETH/USDT",
    },
    dynamicBook: {
      dynamic_order_book_is_on: true,
      dynamic_order_book_mode: "aggressive",
      dynamic_order_book_end_sell: 55000.0,
      dynamic_order_book_start_sell: 50000.0,
      dynamic_order_book_price_step_min_sell: 0.1,
      dynamic_order_book_price_step_max_sell: 0.5,
      dynamic_order_book_count_of_orders_sell: 10,
      dynamic_order_book_pause_between_orders_sell: 5.0,
      dynamic_order_book_pause_between_cycles_sell: 10.0,
      dynamic_order_book_end_buy: 30000.0,
      dynamic_order_book_start_buy: 25000.0,
      dynamic_order_book_price_step_min_buy: 0.2,
      dynamic_order_book_price_step_max_buy: 0.6,
      dynamic_order_book_count_of_orders_buy: 15,
      dynamic_order_book_pause_between_orders_buy: 7.0,
      dynamic_order_book_pause_between_cycles_buy: 12.0,
    },
  },
];

const columnHelper = createColumnHelper<MMSettings>();

const columns = [
  columnHelper.accessor("connectionSettings.id", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("mmSettings.pair", {
    header: () => "Pair Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.connectionSettings.exchange, {
    id: "Exchange",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Exchange</span>,
  }),
  columnHelper.accessor("connectionSettings.on_off_bot", {
    header: () => "Is online",
    cell: (info) => info.getValue(),
  }),
];

export default function Users() {
  const [selectedUser, setSelectedUser] = useState<MMSettings>({
    connectionSettings: {id: NaN},
  } as MMSettings);
  const [sorting, setSorting] = useState<SortingState>([]);

  const [data] = useState(() => [...mockData]);

  useEffect(() => {}, [selectedUser]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div
      id="App"
      style={{
        display: "flex",
        backgroundColor: mainColor,
      }}
    >
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      {!selectedUser.connectionSettings.id ? (
        <PairsTable table={table} selectUser={setSelectedUser} />
      ) : (
        <InnerMMSettings return={setSelectedUser} data={selectedUser} />
      )}
    </div>
  );
}
