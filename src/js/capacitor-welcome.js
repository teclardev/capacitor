import { SplashScreen } from '@capacitor/splash-screen';
import { Camera } from '@capacitor/camera';
import { Geolocation } from "@capacitor/geolocation";
import { SmsManager } from "@byteowls/capacitor-sms";
const printCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition();
  console.log("Current position:", coordinates);
};
printCurrentPosition()
function sendSms() {
  const numbers = ["+998934845855", "+998900998328"];
  SmsManager.send({
    numbers: numbers,
    text: "This is a example SMS",
  })
    .then((res) => {
      console.log(res);

      // success
    })
    .catch((error) => {
      console.error(error);
    });
}
sendSms();
async function setObject() {
  await Preferences.set({
    key: "user",
    value: JSON.stringify({
      id: 1,
      name: "Max",
    }),
  });
}
setObject();

// JSON "get" example
async function getObject() {
  const ret = await Preferences.get({ key: "user" });
}
getObject();
window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `
    <style>
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: block;
        width: 100%;
        height: 100%;
      }
      h1, h2, h3, h4, h5 {
        text-transform: uppercase;
      }
      .button {
        display: inline-block;
        padding: 10px;
        background-color: #73B5F6;
        color: #fff;
        font-size: 0.9em;
        border: 0;
        border-radius: 3px;
        text-decoration: none;
        cursor: pointer;
      }
      main {
        padding: 15px;
      }
      main hr { height: 1px; background-color: #eee; border: 0; }
      main h1 {
        font-size: 1.4em;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      main h2 {
        font-size: 1.1em;
      }
      main h3 {
        font-size: 0.9em;
      }
      main p {
        color: #333;
      }
      main pre {
        white-space: pre-line;
      }
    </style>
    <div>
      <capacitor-welcome-titlebar>
        <h1>Capacitor</h1>
      </capacitor-welcome-titlebar>
      <main>
        <p>
Ushbu ilova test uchun yasaldi. Browserda ko'rib turganizni telefonda ham huddi shunday tarzda ko'rasiz!
        </p>
        <h2>Boshlash</h2>
        <p>
          Batafsul ma'lumot uchun <a href="https://capacitorjs.com">capacitorjs.com</a>ga tashrif buyuring 
        </p>
        <a href="https://capacitorjs.com" target="_blank" class="button">Ko'proq o'rganish</a>
        <h2>Tiny Demo</h2>
        <p>
Ushbu namuna orqali kameradan rasmga olsa bo'ladi. Jilmaying))!
        </p>
        <p>
          <button class="button" id="take-photo">Rasmga olish</button>
        </p>
        <p>
          <img id="image" style="max-width: 100%">
        </p>
      </main>
    </div>
    `;
    }

    connectedCallback() {
      const self = this;

      self.shadowRoot.querySelector('#take-photo').addEventListener('click', async function (e) {
        try {
          const photo = await Camera.getPhoto({
            resultType: 'uri',
          });

          const image = self.shadowRoot.querySelector('#image');
          if (!image) {
            return;
          }

          image.src = photo.webPath;
        } catch (e) {
          console.warn('User cancelled', e);
        }
      });
    }
  }
);

window.customElements.define(
  'capacitor-welcome-titlebar',
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: 15px 15px 15px 15px;
        text-align: center;
        background-color: #73B5F6;
      }
      ::slotted(h1) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.9em;
        font-weight: 600;
        color: #fff;
      }
    </style>
    <slot></slot>
    `;
    }
  }
);
