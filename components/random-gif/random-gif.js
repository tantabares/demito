const api_key = 'xkRLMi34NB01NmAjfZauXpHGiJQAwtIo';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=nickiminaj`;
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RandomGif() {
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);
  return (
    <div>
      <img src={data.data.images.downsized_medium.url} alt='' />
    </div>
  );
}
