const Contact = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Contact</h2>

      <form className="mt-5 space-y-3">
        <input className="border p-2 w-full" placeholder="Name" />
        <input className="border p-2 w-full" placeholder="Email" />
        <textarea className="border p-2 w-full" placeholder="Message" />

        <button className="bg-black text-white px-5 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;