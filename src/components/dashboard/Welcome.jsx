import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to our shop!</h1>
      <p>
        Please exlpore <Link to="/products">our products</Link> or share this
        site with others.
      </p>
    </div>
  );
}
