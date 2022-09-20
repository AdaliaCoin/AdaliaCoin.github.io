  /** Connect to Moralis server */
        const serverUrl = "https://qh6nwbsj5omz.usemoralis.com:2053/server";
        const appId = "sdFoqZI7sMr6pgpxcMpgu5D3jFOoAJORraZlcab8";
        Moralis.start({ serverUrl, appId });


        async function login() {
            let user = Moralis.User.current();
            if (!user) {
                try {
                    user = await Moralis.authenticate({ signingMessage: "Authenticate" })
                    console.log(user)
                    console.log(user.get('ethAddress'))
                } catch (error) {
                    console.log(error)
                }
            }
        }

        async function logOut() {
            await Moralis.User.logOut();
            console.log("logged out");
        }

        document.getElementById("btn-login").onclick = login;
        document.getElementById("btn-logout").onclick = logOut;