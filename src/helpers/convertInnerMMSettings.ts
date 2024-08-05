import { MMSettings } from "../pages/inner/innerMMsettings";

interface FormField {
  id: string;
  label: string;
  value: string | number | boolean;
  type: "text" | "number" | "checkbox" | "select";
}

interface Section {
  isAdmin: boolean;
  section: string;
  fields: FormField[];
}

export const convertMMSettings = (data: MMSettings): Section[] => {
  return [
    {
      isAdmin: true,
      section: "Connection Settings",
      fields: [
        {
          id: "connectionSettings_id",
          label: "ID",
          value: data.connectionSettings.id,
          type: "number",
        },
        {
          id: "connectionSettings_manager_id",
          label: "Manager ID",
          value: data.connectionSettings.manager_id,
          type: "number",
        },
        {
          id: "connectionSettings_on_off_bot",
          label: "On/Off Bot",
          value: data.connectionSettings.on_off_bot,
          type: "checkbox",
        },
        {
          id: "connectionSettings_exchange",
          label: "Exchange",
          value: data.connectionSettings.exchange,
          type: "text",
        },
        {
          id: "connectionSettings_open_key",
          label: "Open Key",
          value: data.connectionSettings.open_key,
          type: "text",
        },
        {
          id: "connectionSettings_private_key",
          label: "Private Key",
          value: data.connectionSettings.private_key,
          type: "text",
        },
        {
          id: "connectionSettings_password",
          label: "Password",
          value: data.connectionSettings.password,
          type: "text",
        },
      ],
    },
    {
      isAdmin: false,
      section: "MM Settings",
      fields: [
        {
          id: "mmSettings_mindif",
          label: "Min Diff",
          value: data.mmSettings.mindif,
          type: "number",
        },
        {
          id: "mmSettings_spread_mindif",
          label: "Spread Min Diff",
          value: data.mmSettings.spread_mindif,
          type: "number",
        },
        {
          id: "mmSettings_dont_trade_price_max",
          label: "Don't Trade Price Max",
          value: data.mmSettings.dont_trade_price_max,
          type: "number",
        },
        {
          id: "mmSettings_dont_trade_price_min",
          label: "Don't Trade Price Min",
          value: data.mmSettings.dont_trade_price_min,
          type: "number",
        },
        {
          id: "mmSettings_precision_amount",
          label: "Precision Amount",
          value: data.mmSettings.precision_amount,
          type: "number",
        },
        {
          id: "mmSettings_buy_before_sell_min",
          label: "Buy Before Sell Min",
          value: data.mmSettings.buy_before_sell_min,
          type: "number",
        },
        {
          id: "mmSettings_buy_before_sell_max",
          label: "Buy Before Sell Max",
          value: data.mmSettings.buy_before_sell_max,
          type: "number",
        },
        {
          id: "mmSettings_trade_type",
          label: "Trade Type",
          value: data.mmSettings.trade_type,
          type: "number",
        },
        {
          id: "mmSettings_min_count_of_orders",
          label: "Min Count of Orders",
          value: data.mmSettings.min_count_of_orders,
          type: "number",
        },
        {
          id: "mmSettings_max_count_of_orders",
          label: "Max Count of Orders",
          value: data.mmSettings.max_count_of_orders,
          type: "number",
        },
        {
          id: "mmSettings_pair",
          label: "Pair",
          value: data.mmSettings.pair,
          type: "text",
        },
        {
          id: "mmSettings_volume_to_trade_per_day_max",
          label: "Volume to Trade Per Day Max",
          value: data.mmSettings.volume_to_trade_per_day_max,
          type: "number",
        },
        {
          id: "mmSettings_volume_to_trade_per_day_min",
          label: "Volume to Trade Per Day Min",
          value: data.mmSettings.volume_to_trade_per_day_min,
          type: "number",
        },
        {
          id: "mmSettings_precision_price",
          label: "Precision Price",
          value: data.mmSettings.precision_price,
          type: "number",
        },
        {
          id: "mmSettings_min_exchange_amount",
          label: "Min Exchange Amount",
          value: data.mmSettings.min_exchange_amount,
          type: "number",
        },
        {
          id: "mmSettings_dont_check_amount",
          label: "Don't Check Amount",
          value: data.mmSettings.dont_check_amount,
          type: "number",
        },
        {
          id: "mmSettings_is_reverse_on",
          label: "Is Reverse On",
          value: data.mmSettings.is_reverse_on,
          type: "checkbox",
        },
        {
          id: "mmSettings_restart_after_stop",
          label: "Restart After Stop",
          value: data.mmSettings.restart_after_stop,
          type: "checkbox",
        },
      ],
    },
    {
      isAdmin: false,
      section: "Spread",
      fields: [
        {
          id: "spread_is_spread_skip_on",
          label: "Is Spread Skip On",
          value: data.spread.is_spread_skip_on,
          type: "checkbox",
        },
        {
          id: "spread_spread_skip_sell_one",
          label: "Spread Skip Sell One",
          value: data.spread.spread_skip_sell_one,
          type: "number",
        },
        {
          id: "spread_spread_skip_sell_sum",
          label: "Spread Skip Sell Sum",
          value: data.spread.spread_skip_sell_sum,
          type: "number",
        },
        {
          id: "spread_spread_skip_buy_one",
          label: "Spread Skip Buy One",
          value: data.spread.spread_skip_buy_one,
          type: "number",
        },
        {
          id: "spread_spread_skip_buy_sum",
          label: "Spread Skip Buy Sum",
          value: data.spread.spread_skip_buy_sum,
          type: "number",
        },
        {
          id: "spread_spread_skip_mode",
          label: "Spread Skip Mode",
          value: data.spread.spread_skip_mode,
          type: "select",
        },
        {
          id: "spread_spread_skip_sell_skipped_amount",
          label: "Spread Skip Sell Skipped Amount",
          value: data.spread.spread_skip_sell_skipped_amount,
          type: "number",
        },
        {
          id: "spread_spread_skip_buy_skipped_amount",
          label: "Spread Skip Buy Skipped Amount",
          value: data.spread.spread_skip_buy_skipped_amount,
          type: "number",
        },
      ],
    },
    {
      isAdmin: false,
      section: "Volumes",
      fields: [
        {
          id: "volumes_volume_increasing_ratio",
          label: "Volume Increasing Ratio",
          value: data.volumes.volume_increasing_ratio,
          type: "number",
        },
        {
          id: "volumes_alternative_account_trading_mode",
          label: "Alternative Account Trading Mode",
          value: data.volumes.alternative_account_trading_mode,
          type: "checkbox",
        },
        {
          id: "volumes_cancel_tail_orders",
          label: "Cancel Tail Orders",
          value: data.volumes.cancel_tail_orders,
          type: "checkbox",
        },
      ],
    },
    {
      isAdmin: true,
      section: "Alternative Access",
      fields: [
        {
          id: "alternativeAccess_alternative_account_open_key",
          label: "Alternative Account Open Key",
          value: data.alternativeAccess.alternative_account_open_key,
          type: "text",
        },
        {
          id: "alternativeAccess_alternative_account_private_key",
          label: "Alternative Account Private Key",
          value: data.alternativeAccess.alternative_account_private_key,
          type: "text",
        },
        {
          id: "alternativeAccess_alternative_account_pair",
          label: "Alternative Account Pair",
          value: data.alternativeAccess.alternative_account_pair,
          type: "text",
        },
      ],
    },
    {
      isAdmin: false,
      section: "Dynamic Book",
      fields: [
        {
          id: "dynamicBook_dynamic_order_book_is_on",
          label: "Dynamic Order Book Is On",
          value: data.dynamicBook.dynamic_order_book_is_on,
          type: "checkbox",
        },
        {
          id: "dynamicBook_dynamic_order_book_mode",
          label: "Dynamic Order Book Mode",
          value: data.dynamicBook.dynamic_order_book_mode,
          type: "text",
        },
        {
          id: "dynamicBook_dynamic_order_book_end_sell",
          label: "Dynamic Order Book End Sell",
          value: data.dynamicBook.dynamic_order_book_end_sell,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_start_sell",
          label: "Dynamic Order Book Start Sell",
          value: data.dynamicBook.dynamic_order_book_start_sell,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_price_step_min_sell",
          label: "Dynamic Order Book Price Step Min Sell",
          value: data.dynamicBook.dynamic_order_book_price_step_min_sell,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_price_step_max_sell",
          label: "Dynamic Order Book Price Step Max Sell",
          value: data.dynamicBook.dynamic_order_book_price_step_max_sell,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_count_of_orders_sell",
          label: "Dynamic Order Book Count of Orders Sell",
          value: data.dynamicBook.dynamic_order_book_count_of_orders_sell,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_pause_between_orders_sell",
          label: "Dynamic Order Book Pause Between Orders Sell",
          value: data.dynamicBook.dynamic_order_book_pause_between_orders_sell,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_pause_between_cycles_sell",
          label: "Dynamic Order Book Pause Between Cycles Sell",
          value: data.dynamicBook.dynamic_order_book_pause_between_cycles_sell,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_end_buy",
          label: "Dynamic Order Book End Buy",
          value: data.dynamicBook.dynamic_order_book_end_buy,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_start_buy",
          label: "Dynamic Order Book Start Buy",
          value: data.dynamicBook.dynamic_order_book_start_buy,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_price_step_min_buy",
          label: "Dynamic Order Book Price Step Min Buy",
          value: data.dynamicBook.dynamic_order_book_price_step_min_buy,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_price_step_max_buy",
          label: "Dynamic Order Book Price Step Max Buy",
          value: data.dynamicBook.dynamic_order_book_price_step_max_buy,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_count_of_orders_buy",
          label: "Dynamic Order Book Count of Orders Buy",
          value: data.dynamicBook.dynamic_order_book_count_of_orders_buy,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_pause_between_orders_buy",
          label: "Dynamic Order Book Pause Between Orders Buy",
          value: data.dynamicBook.dynamic_order_book_pause_between_orders_buy,
          type: "number",
        },
        {
          id: "dynamicBook_dynamic_order_book_pause_between_cycles_buy",
          label: "Dynamic Order Book Pause Between Cycles Buy",
          value: data.dynamicBook.dynamic_order_book_pause_between_cycles_buy,
          type: "number",
        },
      ],
    },
  ];
};
