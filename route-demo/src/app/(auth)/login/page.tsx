export default function Login() {
  return (
    <div>
      <h1 >Login</h1>
      <form className="flex flex-col gap-4 align-center justify-center">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}