import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Customer from "./components/Customer";
import Searchbox from "./components/Searchbox";
import image1 from "./assets/images/image-1.png";
import image2 from "./assets/images/image-2.png";
import image3 from "./assets/images/image-3.png";
import image4 from "./assets/images/image-4.png";
import image5 from "./assets/images/image-5.png";
import image6 from "./assets/images/image-6.png";
import image7 from "./assets/images/image-7.png";
import image8 from "./assets/images/image-8.png";
import image9 from "./assets/images/image-9.png";
import image10 from "./assets/images/image-10.png";
import right from "./assets/images/right.png";
import wrong from "./assets/images/wrong.png";

function App() {
  const originalCustomers = [
    {
      id: 1,
      infoImage: image1,
      name: "Erica",
      date: "03/15/2022",
      order: "3",
      spent: "5000 INR",
      purchase: "03/15/2022 10:00 AM",
      news: right,
      segment: "Regular",
    },
    {
      id: 2,
      infoImage: image2,
      name: "Cristopher",
      date: "03/14/2022",
      order: "2",
      spent: "3000 INR",
      purchase: "03/14/2022 11:30 AM",
      news: wrong,
      segment: "Premium",
    },
    {
      id: 3,
      infoImage: image3,
      name: "Ryan",
      date: "03/13/2022 ",
      order: "1",
      spent: "1000 INR",
      purchase: "03/13/2022 9:45 AM",
      news: right,
      segment: "Regular",
    },
    {
      id: 4,
      infoImage: image4,
      name: "John",
      date: "03/12/2022 ",
      order: "4",
      spent: "7000 INR",
      purchase: "03/12/2022 1:20 PM",
      news: right,
      segment: "Regular",
    },
    {
      id: 5,
      infoImage: image5,
      name: "Joseph",
      date: "03/11/2022",
      order: "2",
      spent: "3000 INR",
      purchase: "03/11/2022 5:45 PM",
      news: right,
      segment: "Premium",
    },
    {
      id: 6,
      infoImage: image6,
      name: "Gregory",
      date: "03/10/2022",
      order: "5",
      spent: "8000 INR",
      purchase: "03/10/2022 10:30 AM",
      news: wrong,
      segment: "Regular",
    },
    {
      id: 7,
      infoImage: image7,
      name: "Gary",
      date: "03/09/2022",
      order: "1",
      spent: "1000 INR",
      purchase: "03/09/2022 12:00 PM",
      news: right,
      segment: "Regular",
    },
    {
      id: 8,
      infoImage: image8,
      name: "Fred",
      date: "03/08/2022",
      order: "3",
      spent: "5000 INR",
      purchase: "03/08/2022 1:30 PM",
      news: right,
      segment: "Premium",
    },
    {
      id: 9,
      infoImage: image9,
      name: "Jenifer",
      date: "03/07/2022",
      order: "2",
      spent: "3000 INR",
      purchase: "03/07/2022 3:12 PM",
      news: wrong,
      segment: "Regular",
    },
    {
      id: 10,
      infoImage: image10,
      name: "Sophia",
      date: "03/06/2022",
      order: "4",
      spent: "6000 INR",
      purchase: "03/06/2022 4:30 PM",
      news: right,
      segment: "Regular",
    },
  ];

  const [option, setOption] = useState({
    lastSeen: "asc",
    orders: "asc",
    totalSpent: "asc",
    latestPurchase: "asc",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [customers, setCustomers] = useState(originalCustomers);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredCustomers = query
      ? originalCustomers.filter((customer) =>
          customer.name.toLowerCase().includes(query.toLowerCase())
        )
      : originalCustomers;
    setCustomers(filteredCustomers);
  };

  const toggleSortOrder = (key) => {
    setOption((prevState) => ({
      ...prevState,
      [key]: prevState[key] === "asc" ? "desc" : "asc",
    }));
  };

  const sortByLastSeen = () => {
    const sortedCustomers = [...customers];
    sortedCustomers.sort((a, b) => {
      if (option.lastSeen === "asc") {
        return a.date.localeCompare(b.date);
      } else {
        return b.date.localeCompare(a.date);
      }
    });
    setCustomers(sortedCustomers);
    toggleSortOrder("lastSeen");
  };

  const sortByOrders = () => {
    const sortedCustomers = [...customers];
    sortedCustomers.sort((a, b) => {
      if (option.orders === "asc") {
        return a.order.localeCompare(b.order);
      } else {
        return b.order.localeCompare(a.order);
      }
    });
    setCustomers(sortedCustomers);
    toggleSortOrder("orders");
  };

  const sortByTotalSpent = () => {
    const sortedCustomers = [...customers];
    sortedCustomers.sort((a, b) => {
      if (option.totalSpent === "asc") {
        return a.spent.localeCompare(b.spent);
      } else {
        return b.spent.localeCompare(a.spent);
      }
    });
    setCustomers(sortedCustomers);
    toggleSortOrder("totalSpent");
  };

  const sortByLatestPurchase = () => {
    const sortedCustomers = [...customers];
    sortedCustomers.sort((a, b) => {
      if (option.latestPurchase === "asc") {
        return a.purchase.localeCompare(b.purchase);
      } else {
        return b.purchase.localeCompare(a.purchase);
      }
    });
    setCustomers(sortedCustomers);
    toggleSortOrder("latestPurchase");
  };

  useEffect(() => {
    setOption({
      lastSeen: "",
      orders: "",
      totalSpent: "",
      latestPurchase: "",
    });
  }, []);

  return (
    <div>
      <Searchbox handleSearch={handleSearch} />
      <Header
        Customer="Customer"
        LastSeen="Last Seen"
        Orders="Order"
        TotalSpent="Total Spent"
        LatestPurchase="Latest Purchase"
        News="News"
        Segments="Segments"
        sortByLastSeen={sortByLastSeen}
        sortByOrders={sortByOrders}
        sortByTotalSpent={sortByTotalSpent}
        sortByLatestPurchase={sortByLatestPurchase}
        sortOption={option}
      />
      {customers.map((customer) => (
        <Customer
          key={customer.id}
          infoImage={customer.infoImage}
          name={customer.name}
          date={customer.date}
          order={customer.order}
          spent={customer.spent}
          purchase={customer.purchase}
          news={customer.news}
          segment={customer.segment}
        />
      ))}
    </div>
  );
}

export default App;
