// balance = savings (initially) (Balance.jsx)
const Balance = ({ balance }) => {
  return (
    <div>
      <p>
        Initial Balance: <span>{balance !== null ? balance : "$0"}</span>
      </p>
    </div>
  );
};

export default Balance;
