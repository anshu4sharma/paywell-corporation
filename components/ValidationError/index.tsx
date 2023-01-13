import React from 'react';
interface Error {
  error: string;
}
const index = (props: Error) => {
  return <p className="text-sm mt-2 text-red-600">{props.error}</p>;
};

export default index;
