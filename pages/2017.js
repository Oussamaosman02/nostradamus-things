import s from '../styles/years.module.css'
import Head from 'next/head'
import Image from 'next/image'

import ramblas from '../public/assets/ramblas2017-nostradamus.webp'
import vesubio from '../public/assets/vesubio2017-nostradamus.webp'

export default function dosdiecisiete () {
  return (
    <>
      <Head>
        <title>Nostradamus para 2017</title>
        <meta
          name='description'
          content='¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el año 2017?Entonces no te puedes perder nuestra página'
        />
        <meta property='og:title' content='Predicciones de Nostradamus 2017' />
        <meta
          property='og:description'
          content='¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el año 2017?'
        />
        <meta property='og:site_name' content='Nostradamus para 2017' />
      </Head>
      <h1 className={s.h}>Predicciones para 2017</h1>
      <div className={s.cont}>
        <ol>
          <li>
            EEUU será ingobernable.Se habla de una “esclerosis de superpotencia”
            donde el país norteamericano entrará en una etapa “más ingobernable
            e incompetente”. Todo esto deberá a la corrupción política y fuertes
            desigualdades en la sociedad.
            <span className={s.act} />
          </li>
          <li>
            China se convertirá en la nueva superpotencia.El gigante asiático
            realizará un movimiento estratégico que le podrá a la cabeza del
            mundo, convirtiéndose en la nueva superpotencia. Este movimiento
            tendrá consecuencias a largo plazo.
            <span className={s.act} />
          </li>
          <li>
            Fuerte terremoto.Un gran terremoto sacudirá la costa de Estados
            Unidos, justamente donde se encuentra la falla de San Andrés.
            <span className={s.amb} />
          </li>
          <li>
            Grave crisis económica en Italia que arrastrará a toda Europa.El
            francés pronosticaba que Italia sufriría una grave crisis económica
            que arrastraría a toda Europa a una nueva crisis financiera.
            <span className={s.noact} />
          </li>
          <li>
            La muerte del Papa.Nostradamus predijo la muerte del líder de la
            Iglesia Católica cuando coincidiesen dos Papas en un mismo periodo.
            <span className={s.noact} />
          </li>
          <li>
            Conflictos en América Latina.Varios conflictos se producirán en los
            países de América Latina debido a sus gobiernos y a los cambios
            drásticos.
            <span className={s.amb} />
          </li>
          <li>
            El calentamiento global dará lugar a conflictos armados.Debido a la
            escasez de recursos naturales se producirán fuertes conflictos
            armados, Nostradamus los llamó ‘Hot War’
            <span className={s.amb} />
          </li>
          <li>
            Terrorismo y holocausto nuclear.El terrorismo será el principal
            problema del año aunque también escribió sobre un holocausto nuclear
            antes de que se produjese la tercera guerra mundial.
            <span className={s.act} />
          </li>
        </ol>
      </div>
      <h2 className={s.h}>Noticias destacadas y relacionadas</h2>
      <div className={s.cont}>
        <ul>
          <li>
            <b>Dos terremotos azotan México en el mes de septiembre</b>Uno el 7
            de septiembre con una magnitud de 8.2 con 102 víctimas mortales y
            otro el 19 de septiembre de 7.1 que dejo 370 fallecidos
          </li>
          <li>
            <div>
              <Image
                src={ramblas}
                width={600}
                height={327}
                alt='Un atentado terrorista en Barcelona provoca al menos 13 muertos'
                layout='responsive'
                placeholder='blur'
              />
            </div>
            <b>
              Un atentado terrorista en Barcelona provoca al menos 13 muertos
            </b>
            Una furgoneta ha atropellado a una multitud en La Rambla. Los Mossos
            d Esquadra relacionan el atentado con la explosión ayer de una casa
            en Alcanar.El Estado Islámico (ISIS, en sus siglas en inglés) golpeó
            ayer el corazón de Barcelona y dejó al menos 13 muertos y más de 100
            heridos en el atentado más grave que sufre España desde el 11-M y el
            primero yihadista desde entonces.
            <br />
            El 2017 estará marcado como un año aciago en la historia moderna de
            la humanidad por cuenta del terrorismo mundial, en especial, el de
            origen yihadista. Según informó el Índice de Terrorismo Global del
            Instituto de Economía y Paz (IEP), el año que termina dejó unos 388
            ataques en 77 países.
            <br />
            El peor ataque de esta lista en suelo occidental fue efectuado por
            un hombre que actuó en solitario. El 1 de octubre, Stephen Paddock
            le disparó desde su habitación en el hotel de Mandalay Bay de Las
            Vegas (EEUU) a una multitud que bailaba en un concierto y asesinó a
            59 personas. Según las autoridades, el ataque no fue motivado por
            filiaciones religiosas extremistas
            <br />
            Finalmente, el 22 de mayo en Manchester (Reino Unido) un kamikaze
            yihadista se inmoló en un concierto de la cantante estadounidense
            Ariana Grande. La explosión produjo la muerte de 22 personas y 116
            heridos. Daesh advirtió que fue el autor intelectual del ataque. Fue
            el atentado terrorista más letal en Inglaterra desde los ocurridos
            en el metro de Londres el 7 de julio de 2005.
          </li>
          <li>
            <b>
              La economía europea acelera su recuperación con España en el grupo
              de cabeza
            </b>{' '}
            Italia, cuestionada por su elevada deuda y la anemia que afecta a su
            economía desde hace más de 15 años, ha sorprendido favorablemente.
            Roma ha acelerado el ritmo de crecimiento interanual hasta el 1,5%
            —el mejor dato desde 2011— y su prima de riesgo respondía con caídas
            a primera hora de esta mañana. El país transalpino progresó el 0,4%,
            por debajo de la media europea, pero aleja de momento las
            expectativas más sombrías.
          </li>
          <li>
            <b>El mundo generó cantidades históricas de emisiones de carbono</b>
            Jefes de Estado y otros líderes reafirmaron sus compromisos con la
            lucha contra el cambio climático en la cumbre “One Planet” realizada
            en París el 12 de diciembre, con ocasión del segundo aniversario del
            Acuerdo de París. Sus llamados a adoptar medidas concretas ocurren
            cuando las concentraciones de dióxido de carbono, uno de los gases
            de efecto invernadero, alcanzaron el más alto nivel en 800 000 años.
            Las emisiones de CO2 aumentaron un 60 % entre 1990 y 2014. En los
            últimos tres años, las emisiones mundiales se habían estabilizado,
            pero recientemente empezaron a crecer de nuevo.
          </li>
          <li>
            <b>Los desastres naturales dominaron las noticias</b>Huracanes que
            rompieron récords, lluvias torrenciales causadas por los monzones e
            inundaciones históricas se cobraron vidas y destruyeron propiedades
            en el Caribe, Asia meridional y Estados Unidos. En Sierra Leona y
            Colombia, cientos de personas murieron producto de aludes de lodo
            luego de intensas lluvias. En la actualidad, se producen cuatro
            veces más desastres naturales (en que más de 10 personas resultan
            muertas o más de 100 son afectadas) que en la década de 1960
          </li>
          <li>
            <div>
              <Image
                src={vesubio}
                width={500}
                height={281}
                alt='Arde el Vesubio: desalojo de personas de sus alrededores'
                layout='responsive'
                placeholder='blur'
              />
            </div>
            <b>Arde el Vesubio: desalojo de personas de sus alrededores</b>Los
            violentos incendios forestales en Italia han forzado más
            evacuaciones en la ciudad costera de Torre del Greco, situada a lo
            largo de la costa occidental del país, al pie del Monte Vesubio.
          </li>
        </ul>
      </div>
    </>
  )
}
