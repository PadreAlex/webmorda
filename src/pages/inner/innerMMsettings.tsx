import React from 'react';

export type skipMode = 'buy' | 'sell' | 'both'
export interface MMSettings {
    id: number;
    manager_id: number;
    on_off_bot: boolean;
    exchange: string;
    open_key: string;
    private_key: string;
    password: string;
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
    is_spread_skip_on: boolean;
    spread_skip_sell_one: number;
    spread_skip_sell_sum: number;
    spread_skip_buy_one: number;
    spread_skip_buy_sum: number;
    spread_skip_mode: skipMode;
    spread_skip_sell_skipped_amount: number;
    spread_skip_buy_skipped_amount: number;
    volume_increasing_ratio: number;
    alternative_account_trading_mode: boolean;
    cancel_tail_orders: boolean;
    alternative_account_open_key: string;
    alternative_account_private_key: string;
    alternative_account_pair: string;
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
    restart_after_stop: boolean;
}



interface SettingsProps {
    data: MMSettings;
    return: Function
}

const InnerMMSettings: React.FC<SettingsProps> = (props) => {
    const formFields = Object.entries(props.data).map(([key, value]) => ({
        label: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        value,
        id: key,
    }));

    return (
        <div className='rounded-[20px] shadow-[5px_10px_10px]'
        style={{
            width: "75vw",
            backgroundColor: 'white',
            margin: 'auto',
            padding: '20px 20px 20px 20px',
            border: "1px black solid",
            maxHeight: '75vh',
            overflowY: 'scroll',
        }}>
            <div className='cursor-pointer' onClick={() => props.return({
                id: NaN,
                name: "",
                email: "",
                pairs: [],
                lastSeenOnline: ""
            })}>
                ←
            </div>
            <form style={formStyle}>
                {formFields.map((field, index) => (
                    <div key={index} style={inputContainerStyle}>
                        <label htmlFor={field.id}>{field.label}</label>
                        {field.id === 'spread_skip_mode' ? (
                            <select id={field.id} value={field.value}>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                                <option value="both">Both</option>
                            </select>
                        ) : (
                            <input
                                type={typeof field.value === 'boolean' ? 'checkbox' : 'text'}
                                id={field.id}
                                value={typeof field.value === 'boolean' ? undefined : field.value}
                                checked={typeof field.value === 'boolean' ? field.value : undefined}
                            />
                        )}
                    </div>
                ))}
            </form>
        </div>
    );
};

const formStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
};

const inputContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

export default InnerMMSettings;
