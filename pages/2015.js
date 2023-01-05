import Head from 'next/head'
import Image from 'next/image'
import s from '../styles/years.module.css'

import anciana from '../public/assets/anciana-nostradamus.webp'
import calbuco from '../public/assets/calbuco-nostradamus.webp'
import coquimbo from '../public/assets/coquimbo-nostradamus.webp'

export default function dosquince () {
  return (
    <>
      <Head>
        <title>Nostradamus para 2015</title>
        <meta
          name='description'
          content='¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el año 2015 ?Entonces no te puedes perder nuestra página'
        />
        <meta property='og:title' content='Predicciones de Nostradamus 2015' />
        <meta
          property='og:description'
          content='¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el año 2015 ?'
        />
        <meta property='og:site_name' content='Nostradamus para 2015' />
      </Head>
      <h1 className={s.h}>Predicciones para 2015</h1>
      <div className={s.cont}>
        <ol>
          <li>
            Solo habrá un idioma. El astrólogo y médico dijo que el mundo
            tendría en 2015 un solo idioma gracias a una especie de máquina para
            traducción universal. Algunos lo interpretan relacionándolo con los
            ordenaroes modernos.
            <span className={s.noact} />
          </li>
          <li>
            La economía mundial se derrumbará. Según Nostradamus,
            literalmentente &quot;los ricos morirán muchas veces&quot;
            <span className={s.noact} />
          </li>
          <li>
            Habrá una gran erupción del Vesubio, concretamente para finales del
            año que viene o principios de 2016. Añadió que si la erupción ocurre
            de día la región afectada quedará sumida en la oscuridad absoluta
            <span className={s.noact} />
          </li>
          <li>
            La radiación quemará nuestro mundo. Así lo escribió: &quot;El cielo
            se abrirá, los campos serán quemados por el calor&quot;. Hay quien
            relaciona esta predicción con el cambio climático
            <span className={s.amb} />
          </li>
          <li>
            La gente vivirá más de 200 años, gracias a los avances en medicina.
            En 2015, una persona anciana como él, que entonces tenía 80 años,
            parecerá que tiene 50 años
            <span className={s.noact} />
          </li>
          <li>
            Un gran terremoto sacudirá el oeste de América del Norte, que podría
            desembocar en una erupción volcánica
            <span className={s.noact} />
          </li>
          <li>
            Todos los impuestos serán abolidos en el mundo occidental.
            Nostradamus escribió que &quot;la gente se negará a pagar impuestos
            al rey&quot;.
            <span className={s.noact} />
          </li>
          <li>
            Aprenderemos a hablar con animales. Los avances en la telepatía
            harán posible que las personas hablen con sus mascotas lo que
            conducirá a más vegetarianismo. &quot;El cerdo se convertirá en un
            hermano para el hombre&quot;, sentenció.
            <span className={s.act} />
          </li>
          <li>
            Los muertos resucitarán.“En la edad del milenio, cuando no haya más
            espacio en el infierno, los muertos saldrán de sus tumbas”, advirtió
            Nostradamus. Esta predicción escalofriante coincide con las
            profecías que se encuentran en el Apocalipsis.
            <span className={s.noact} />
          </li>
          <li>
            Los aspirantes a padres necesitarán licencias.Los días en que
            cualquiera podía tener un bebé se convertirán en una cosa del pasado
            en el año 2015,predice Nostradamus . ¿Podría ser este esfuerzo
            mundial para detener la superpoblación ? Puede que sea demasiado
            drástico ya que los niños son propiedades de sus padres, no del
            gobierno.
            <span className={s.amb} />
          </li>
        </ol>
      </div>
      <h2 className={s.h}>Noticias destacadas y relacionadas</h2>
      <div className={s.cont}>
        <ul>
          <li>
            <div>
              <Image
                src={calbuco}
                width={606}
                height={404}
                alt='Entra en erupción el volcán Calbuco'
                layout='responsive'
                placeholder='blur'
              />
            </div>
            <b>Entra en erupción el volcán Calbuco tras medio siglo dormido</b>
            Una impresionante columna de piedras, humo y ceniza de veinte
            kilómetos de altura ha caído sobre los pueblos del entorno. Los
            vuelos han sido supendidos en los pasillos aéreos afectados.
          </li>
          <li>
            <b>El año 2015 fue de crecimiento global contenido</b>
            -con un PIB mundial que aumentó del orden del 2,7%- y un incremento
            del comercio que fue incluso menor. En lo que respecta a los datos
            económicos destacables en 2015, se escribió un nuevo capítulo del
            drama de la deuda griega, mientras que la zona euro, como tal,
            continuó su modesta recuperación. Por otra parte, a pesar de un
            ligero descenso del ritmo de crecimiento en Estados Unidos, el Fed
            elevó los tipos de interés por primera vez desde 2006, confirmando
            las expectativas del mercado y poniendo presión sobre las monedas y
            las posiciones en el exterior de otros países. Asimismo, los
            resultados de la “Abenomics” en Japón siguieron siendo dispares, con
            mayor impacto sobre la volatilidad que sobre los niveles de
            crecimiento del PIB. Durante 2015 también asistimos a nuevos avances
            de China en su reestructuración hacia una economía de servicios, así
            como un nuevo descenso de los precios de las materias primas en los
            mercados globales que lastró el crecimiento de las economías
            emergentes ricas en recursos. El crecimiento del PIB también fue
            obstaculizado por la alta volatilidad del precio de las acciones y
            las monedas, y la incertidumbre asociada.
          </li>
          <li>
            <b>
              Más de 100 incendios queman los bosques del norte de España en
              pleno invierno
            </b>
            Cantabria, la región más afectada, ha llegado a registrar 83 fuegos
            simultáneos.Más de un centenar de incendios arrasan en estos
            momentos los montes del norte de España, concretamente, de
            Cantabria, donde esta tarde permanecían activos un total de 65
            fuegos de los 83 que han llegado a coincidir, y de Asturias, donde
            se han contabilizado 62 fuegos, de los cuales 23 estaban controlados
            esta tarde. También se han originado focos en el País Vasco y
            Navarra. Los bomberos trabajan a destajo, si bien las fuertes rachas
            de viento, de hasta 130 km/h., están complicando las labores de
            extinción.
          </li>
          <li>
            <div>
              <Image
                src={anciana}
                width={770}
                height={542}
                alt='Muere a los 117 años la persona más vieja del mundo'
                layout='responsive'
                placeholder='blur'
              />
            </div>
            <b>Muere a los 117 años la persona más vieja del mundo</b>La persona
            más vieja del mundo, la japonesa Misao Okawa, ha fallecido a los 117
            años por causas naturales en la residencia de Osaka donde residía.
            Desde febrero de 2013, Okawa era reconocida como la mujer de más
            edad del mundo por el Libro Guiness de los Récords, y desde agosto
            de ese mismo año como la persona viva más vieja.
          </li>
          <li>
            <div>
              <Image
                src={coquimbo}
                width={490}
                height={354}
                alt='Terremoto de Coquimbo 2015'
                layout='responsive'
                placeholder='blur'
              />
            </div>
            <b>Terremoto de Coquimbo</b>
            8.3 en potencia de Magnitud de Momento (MW) 8.4 Mw en escala de
            Richter (ML).A Fecha 16 de septiembre de 2015, 19:54 (UTC-3) con una
            profundidad 23,3 km y duración de 3 minutos aprox.En La Rioja,
            Mendoza, Córdoba, Catamarca, Buenos Aires y San Luis,
            Argentina.Víctimas Chile: 15 fallecidos y Argentina: 1 fallecido
          </li>
          <li>
            <b>Ucrania se niega a pagar a Rusia la deuda de Yanukóvich</b>
            El Gobierno de Ucrania declaró el viernes una moratoria en el pago a
            Rusia de 3.500 millones de dólares (3.230 millones de euros). La
            deuda fue contraída hace dos años, siendo presidente Víctor
            Yanukóvich. Balanceándose al borde de la bancarrota, Kiev ha
            reestructurado este año su deuda con los acreedores, que aceptaron
            sus rebajas y condiciones, pero Rusia exige la reintegración
            completa del dinero y ha anunciado que demandará a Ucrania si ésta
            no paga tras el vencimiento, el próximo domingo.
          </li>
          <li>
            <b>Una nueva tecnología permite a los perros hablar</b>Científicos
            de la computación de Georgia Tech (EE.UU.) han diseñado chalecos
            tecnológicos para perros que se activan con un mordisco o con un
            toque de morro, y que pueden emitir mensajes en lengua humana o
            enviar un mapa GPS. Podrían usarse en búsquedas de personas
            desaparecidas, entre otras aplicaciones.
            <br />
            <b>
              Crean aplicación que te ayuda a &quot;hablar&quot; con tu perro
            </b>{' '}
            Una compañía estadounidense creó un sensor que analiza los
            movimientos de los perros y ayuda a identificar su estado de ánimo.
            Luego, son trasmitidos al celular de su amo para que éste sepa qué
            está pensando... o por lo menos, sintiendo.
          </li>
        </ul>
      </div>
    </>
  )
}
