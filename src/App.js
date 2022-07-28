import "./App.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import firebaseConfig from "./firebaseConfig";

function App() {
  const auth = getAuth();
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  const providerTwitter = new TwitterAuthProvider();
  const providerMicrosoft = new OAuthProvider("microsoft.com");

  const signInWithGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        console.log(result);
        this.user = result.user.email;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, providerGithub)
      .then((result) => {
        console.log(result);
        this.user = result.user.email;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInWithFacebook = () => {
    signInWithPopup(auth, providerFacebook)
      .then((result) => {
        console.log(result);
        this.user = result.user.email;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInWithTwitter = () => {
    signInWithPopup(auth, providerTwitter)
      .then((result) => {
        console.log(result);
        this.user = result.user.email;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInWithMicrosoft = () => {
    signInWithPopup(auth, providerMicrosoft)
      .then((result) => {
        console.log(result);
        this.user = result.user.email;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card-body">
          <div className="card-detail">
            <h1 className="heading">Social Login with Firebase</h1>
            <abbr title="Google">
              <label>
                <img
                  src="google.png"
                  onClick={signInWithGoogle}
                  className="image"
                />
              </label>
            </abbr>

            <abbr title="Github">
              <label>
                <img
                  src="github.png"
                  onClick={signInWithGithub}
                  className="image"
                />
              </label>
            </abbr>

            <abbr title="Facebook">
              <label>
                <img
                  src="facebook.png"
                  onClick={signInWithFacebook}
                  className="image"
                />
              </label>
            </abbr>

            <abbr title="Twitter">
              <label>
                <img
                  src="twitter.png"
                  onClick={signInWithTwitter}
                  className="image"
                />
              </label>
            </abbr>

            <abbr title="Microsoft">
              <label>
                <img
                  src="microsoft.png"
                  onClick={signInWithMicrosoft}
                  className="image"
                />
              </label>
            </abbr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
