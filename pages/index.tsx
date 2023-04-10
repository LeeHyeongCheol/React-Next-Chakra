import Top from "../src/component/top";
import { useQuery } from "react-query";

import Loading from "../src/component/loading";
import React, { useState } from "react";
import Nav from "@/src/component/nav";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const fetchImg = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      setLoading(false);
      return res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const result = useQuery("randomimg", fetchImg, {
    refetchOnWindowFocus: true, // 다른 윈도우 갔다가 돌아오면 함수 재실행 여부
    retry: 0, // 실패 시 재호출 횟수
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <Top result={result.data} />
        </>
      )}
    </>
  );
}
