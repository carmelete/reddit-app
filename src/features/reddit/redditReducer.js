import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        data: {
            title: 'caca',
            author_fullname: 'Carmen Ortega',
            name: "Carmen",
            created: 1665800667.0,
            num_comments: 12,
            ups: 13096,
            preview: {
                images: [
                    {
                        source: {
                            url: "https://preview.redd.it/bq0mb2uyy4v91.jpg?auto=webp&amp;s=26d3b4d0700ccc3f4b3a8859fbb9891b4b414d3e",
                            width: 3024,
                            height: 4032
                        },
                        resolutions: [
                            {
                                url: "https://preview.redd.it/bq0mb2uyy4v91.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=8fb10925a48a9c9fdb6f6c28ea99442bb88b8522",
                                width: 108,
                                height: 144
                            },
                            {
                                url: "https://preview.redd.it/bq0mb2uyy4v91.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=b58fe82d5d457ce52945c14e7e8659e95472fef3",
                                width: 216,
                                height: 288
                            },
                            {
                                url: "https://preview.redd.it/bq0mb2uyy4v91.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=566dd6985495c0d365e3816420694f3a5f36fbdf",
                                width: 320,
                                height: 426
                            },
                            {
                                url: "https://preview.redd.it/bq0mb2uyy4v91.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=28a43a9542d7b0251fc2b3a115d2b7de3ec5817d",
                                width: 640,
                                height: 853
                            },
                            {
                                url: "https://preview.redd.it/bq0mb2uyy4v91.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=e00ad911d74b4b93feb9526b59e17d23253c9a6b",
                                width: 960,
                                height: 1280
                            },
                            {
                                url: "https://preview.redd.it/bq0mb2uyy4v91.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=5ab412d43b86d777ee25f3b17eddd3f42eaf4c0e",
                                width: 1080,
                                height: 1440
                            }
                        ],
                        variants: {},
                        id: "inw-7tLYTNQWRWkoMjooybUp27-v5cxtMwEmEWQACe8"
                    }
                ]
            }
        }
    }
]


export const listingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers: {
        getListing: (state, action) => {
            console.log(state);
        }
    }
});

export const { getListing } = listingSlice.actions;

export default listingSlice.reducer;
