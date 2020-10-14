import React from "react";

interface CurrencySelectorProps {
    currencies: Array<string>;
    current: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CurrencySelector = ({ currencies, current, onChange }: CurrencySelectorProps) => {
    return (
        <form className="currency-selector">
            <label>Select currency&nbsp;
                <select value={current} onChange={onChange}>
                    {currencies.map((currency: string) => <option key={currency} value={currency}>{currency}</option>)}
                </select>
            </label>
        </form>
    );
};

export default CurrencySelector;