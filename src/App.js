import React, { useState, useEffect, useCallback } from "react";

import PaymentsList from "./components/PaymentsList";
import "./App.css";

function App() {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetchPaymentsHandler() {
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedPayments = data.results.map((paymentData) => {
  //         return {
  //           id: paymentData.episode_id,
  //           title: paymentData.title,
  //           openingText: paymentData.opening_crawl,
  //           releaseDate: paymentData.release_date,
  //         };
  //       });
  //       setPayments(transformedPayments);
  //     });
  // }

  const fetchPaymentsHandler = useCallback(async () => {
    // async function fetchPaymentsHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://smspayment.herokuapp.com/payments/getPayments/"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const transformedPayments = data.map((paymentData) => {
        // .results
        return {
          // id: paymentData._id,
          id: paymentData._id,
          price_id: paymentData.price_id,
          quantity: paymentData.quantity,
        };
      });
      setPayments(transformedPayments);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPaymentsHandler();

    return () => {
      // second;
    };
  }, [fetchPaymentsHandler]);

  let content = <p>Click the above button to check for payments</p>;

  if (payments.length > 0) {
    content = <PaymentsList payments={payments} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  // const dummyPayments = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Payment',
  //     openingText: 'This is the opening text of the payment',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Payment 2',
  //     openingText: 'This is the second opening text of the payment',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchPaymentsHandler}>Fetch Payments</button>
      </section>
      <section>
        {content}
        {/*logic moved to js above  */}
        {/* {!isLoading && payments.length > 0 && <PaymentsList payments={payments} />}
        {!isLoading && payments.length === 0 && !error && <p>Found no payments</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
