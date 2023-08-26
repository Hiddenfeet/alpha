import styles from "../styles/Home.module.css";
import GetNfts from "./getNfts";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import Card from "./card.js";

export default function LoggedIn(props) {
  const [nfts, setNfts] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const address = useAddress();
  const chain = "0x89";

  console.log("nfts are");
  console.log(nfts);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let response;
    async function getData() {
      response = await axios
        .get(`https://backened-asad-ghouri.vercel.app/getnfts`, {
          params: { address, chain },
        })
        .then((response) => {
          setNfts(response.data.result);
          console.log("ids are ");
        });
    }
    getData();
  }, []);

  return (
    <section className={styles.loggedInMain}>
      <section className={styles.loggedInAccount}>
        {/* <GetNfts
          stakingContractAddres={props.stakingContractAddres}
          minvalue={props.minvalue}
          maxvalue={props.maxvalue}
        /> */}
         {
  nfts.length > 0 ? (
    <section className={styles.dataContainer}>
      {nfts.reduce((uniqueNFTs, nft) => {
        if (
          nft.metadata &&
          nft.token_id+2 > props.minvalue - 1 &&
          nft.token_id < props.maxvalue &&
          !uniqueNFTs[nft.token_id]
        ) {
          uniqueNFTs[nft.token_id] = true;
          return [
            ...uniqueNFTs,
            <Card
              uri={nft}
              id={nft.token_id}
              key={nft.token_uri}
              stakingContractAddres={props.stakingContractAddres}
            />
          ];
        }
        return uniqueNFTs;
      }, [])}
    </section>
  ) : (
    <h3>You do not have any nft</h3>
  )
}
      </section>
    </section>
  );
}
