import styles from "./Footer.module.css";
import Instagram from "@img/instagram.svg?react";
import Whatsapp from "@img/whatsapp.svg?react";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <h1 className={styles.footer_title}>Contact</h1>
        <div className={styles.footer_content}>
          <div className={styles.footer_item_container}>
            <div className={styles.footer_item_phone}>
              <p className={styles.footer_item_title}>Phone</p>
              <h1 className={styles.phone_item}>+7 (499) 350-66-04</h1>
            </div>
            <div className={styles.footer_item_social}>
              <p className={styles.footer_item_title}>Socials</p>
              <div className={styles.social_item_container}>
                <Instagram />
                <Whatsapp />
              </div>
            </div>
            <div className={styles.footer_item_address}>
              <p className={styles.footer_item_title}>Address</p>
              <h1 className={styles.address_item}>
                Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
              </h1>
            </div>
            <div className={styles.footer_item_time}>
              <p className={styles.footer_item_title}>Working Hours</p>
              <h1 className={styles.time_item}>24 hours a day</h1>
            </div>
          </div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa95f0abb026401a32531c712bc648306d0e16c263dcdb1d52059889267177555&amp;source=constructor"
            width="100%"
            height="350"
            frameBorder={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
