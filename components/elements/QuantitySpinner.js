// components/QuantitySpinner.jsx
import { useState } from 'react';

const QuantitySpinner = ({
  initialValue = 1,
  min = 1,
  max = 1000,
  onQuantityChange
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleIncrement = () => {
    const newValue = Math.min(quantity + 1, max);
    setQuantity(newValue);
    onQuantityChange?.(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(quantity - 1, min);
    setQuantity(newValue);
    onQuantityChange?.(newValue);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || min;
    const clampedValue = Math.min(Math.max(value, min), max);
    setQuantity(clampedValue);
    onQuantityChange?.(clampedValue);
  };

  return (
    <div className="input-box">
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="btn-one"
      >
        -
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={handleChange}
        className=""
      />
      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="btn-two"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySpinner;