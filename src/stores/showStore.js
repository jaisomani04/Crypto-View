import axios from 'axios';
import { create } from 'zustand';

const showStore = create((set) => ({
  graphData: [],
  data: null, // Added data property to store detailed coin information

  reset: () => {
    set({graphData: [], data: null})
  },

  fetchData: async (id) => {
    try {
      const [graphRes, dataRes] = await Promise.all([
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
        )
      ]);

      const graphData = graphRes.data.prices.map(([timestamp, price]) => {
        const date = new Date(timestamp).toLocaleDateString("en-us");
        return {
          Date: date,
          Price: price,
        };
      });

      set({ graphData, data: dataRes.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

export default showStore;
