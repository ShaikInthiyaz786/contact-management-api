// app/comments/route.js

export const GET = async () => {
  console.log("MAHESH PRAJAPATI");
  // console.log(await request.json());
  const dummyObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
    key7: "value7",
    key8: "value8",
    key9: "value9",
    key10: "value10",
  };
  // const response = await axiosApi.get('http://localhost:3006/test', { data: dummyObject, headers: { 'Content-Type': 'application/json' } });
  // redirect('/comments');
  return new Response(JSON.stringify(dummyObject), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
