import { Session } from "./models";

type SessionsProps = {
  sessions: Session[];
};

const Sessions: React.FC<SessionsProps> = ({ sessions }) => {
  return (
    <div className="p-4">
      <p className="text-3xl font-bold mb-10 mt-5 text-center text-[#3369FF]">
        Sessions
      </p>
      <ul className="flex  justify-center items-center  gap-10 flex-wrap text-[#6E6E6E]">
        {/* {sessions.map((session) => (
          <li
            key={session.id}
            className="mb-4 shadows  p-6 border border-gray-300 rounded-lg shadow-md bg-white"
          >
            <p className="text-lg font-semibold text-[#3369FF]">
              {session.name}
            </p>
            <p className="text-[#FFB570] font-bold">
              {new Date(session.date).toLocaleString()}
            </p>
            <hr />
            <p className="mt-2">
              <span className="font-bold">Duration:</span>
              {session.durationMinutes} minutes
            </p>
            <p>
              <span className="font-bold">Price:</span> {session.price} EUR
            </p>

            <p>
              <span className="font-bold">Discount:</span> {session.discount}
              EUR
            </p>
            <p>
              <span className="font-bold">Payment Method:</span>
              {session.paymentMethod}
            </p>
            <p>
              <span className="font-bold">Location:</span> {session.location}
            </p>
            <p>
              <span className="font-bold">Generate Invoice:</span>
              {session.generateInvoice ? "Yes" : "No"}
            </p>
          </li>
        ))} */}

        {sessions.map((session) => (
          <li
            key={session.id}
            className="mb-4 shadows border border-gray-300 rounded-lg shadow-md bg-white"
          >
            <div className="book gap-2">
              <p className="mt-2 pl-4">
                <span className="font-bold">Duration: </span>
                {session.durationMinutes} minutes
              </p>
              <p className="pl-4">
                <span className="font-bold">Price:</span> {session.price} EUR
              </p>

              <p className="pl-4">
                <span className="font-bold">Discount:</span> {session.discount}
                 &nbsp;EUR
              </p>
              <p className="pl-4">
                <span className="font-bold">Payment Method: </span>      
                     {session.paymentMethod}
              </p>
              <p className="pl-4">
                <span className="font-bold">Location:</span> {session.location}
              </p>
              <p className="pl-4">
                <span className="font-bold">Generate Invoice: </span>
                {session.generateInvoice ? "Yes" : "No"}
              </p>
              <div className="cover ">
                <p className="text-lg font-semibold text-[#3369FF]">
                  {session.name}
                </p>
                <p className="text-[#FFB570] font-bold">
                  {new Date(session.date).toLocaleString()}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sessions;
