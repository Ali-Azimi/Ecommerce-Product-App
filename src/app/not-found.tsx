export default function NotFound() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  );
}
