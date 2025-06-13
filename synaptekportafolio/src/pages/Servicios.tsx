import React from 'react';
import styles from './Servicios.module.css';
import {DiAndroid, DiChrome, DiFirefox, DiOpera, DiApple } from 'react-icons/di';
import {FaComments, FaDesktop, FaPuzzlePiece, FaHammer } from 'react-icons/fa';
import {LuChartBar } from 'react-icons/lu';
import {GiRobotAntennas } from 'react-icons/gi';

const Servicios = () => {
  return (
    <div className={styles["servicios-container"]}>
      <div className={`${styles.fila} ${styles["fila-1"]}`}>
        <div className={styles.servicio}>
          <p> Desarrollo Web (Frontend, Backend, Fullstack) </p>
          <div className={styles.icono} >
            <DiChrome className={styles.icono}/>
            <DiFirefox className={styles.icono}/>
            <DiOpera className={styles.icono}/> 
          </div> 
        </div>

        <div className={styles.servicio}>
          <p> Desarrollo de aplicaciones móviles </p>
          <div className={styles.icono} >
            <DiAndroid className={styles.icono}/>
            <DiApple className={styles.icono} />
          </div> 
        </div>



        <div className={styles.servicio}>
          <p> Desarrollo de software <br /> a medida </p>
          <div className={styles.icono}>
          <FaHammer className={styles.icono} />
          </div> 
        </div>

        <div className={styles.servicio}>
          <p> Consultoría tecnológica</p>
          <div className={styles.icono}>
          <FaDesktop className={styles.icono} />
          </div> 
        </div>

      </div>


      <div className={`${styles.fila} ${styles["fila-2"]}`}>

        <div className={styles.servicio}>
            <p> Integraciones (APIs, sistemas externos, etc.) </p>
            <div className={styles.icono} >
              <FaPuzzlePiece className={styles.icono}/>
            </div> 
          </div>


          <div className={styles.servicio}>
            <p> Analitica de datos </p>
            <div className={styles.icono} >
              <LuChartBar className={styles.icono}/>
            </div> 
          </div>

          <div className={styles.servicio}>
            <p> Chatbots </p>
            <div className={styles.icono} >
              <GiRobotAntennas className={styles.icono}/>
              <FaComments className={styles.icono}/>
            </div> 
          </div>

      </div>

    </div>
  );
};

export default Servicios;