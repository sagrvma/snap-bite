import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-body">
      <h1>Oops, encounterd an error!</h1>
      <h2>
        {err.status} {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
