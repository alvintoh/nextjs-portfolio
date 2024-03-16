import Link from "@/components/Shared/Link";

const Contact = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Contact</h2>

      <p className="text-lg font-normal text-gray-100">
        Feel free to contact me at{" "}
        <Link
          href={`mailto:${
            process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL || "alvin4292@gmail.com"
          }`}
          className="text-blue-400 hover:!text-blue-300"
        >
          {process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL || "alvin4292@gmail.com"}
        </Link>
      </p>
    </div>
  );
};

export default Contact;
