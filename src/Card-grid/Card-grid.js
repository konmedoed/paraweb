import './Card-grid.scss';
import Card from '../Card/Card.js'

export default function CardGrid(props){
    const renderingData = props.data.map(item=><Card key={item.source.name} date={item.publishedAt} title={item.title} text={item.content} author={item.author?item.author:item.source.name}/>)

    return(
        <article className='card-grid'>
            {renderingData}
        </article>
    )
}

// {
//     "status":"ok",
//     "totalResults":18443,
//     "articles":[
//         {
//             "source":{
//                 "id":null,
//                 "name":"N-tv.de"
//                 },
//             "author":"n-tv NACHRICHTEN",
//             "title":"Verhandlungen laufen: Twitter soll sich mit Musk-Übernahme anfreunden",
//             "description":"Twitter scheint nun doch nicht mehr so abgeneigt, an  Elon Musk zu verkaufen. Das berichten zumindest mehrere US-Medien. Nachdem der Tech-Milliardär vor einigen Tagen neue Finanzierungszusagen präsentiert, sollen jetzt bereits Verhandlungen laufen.",
//             "url":"https://www.n-tv.de/wirtschaft/Twitter-soll-sich-mit-Musk-Ubernahme-anfreunden-article23287307.html",
//             "urlToImage":"https://bilder3.n-tv.de/img/incoming/crop23287306/073132179-cImg_16_9-w1200/283700215.jpg",
//             "publishedAt":"2022-04-25T05:33:43Z",
//             "content":"Twitter scheint nun doch nicht mehr so abgeneigt, an Elon Musk zu verkaufen. Das berichten zumindest mehrere US-Medien. Nachdem der Tech-Milliardär vor einigen Tagen neue Finanzierungszusagen präsent… [+2223 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"Diepresse.com"
//                 },
//             "author":"Die Presse",
//             "title":"Twitter-Aktionäre machen Druck für Verhandlungen mit Musk",
//             "description":"Insidern zufolge verhandelt der Konzern mit Tesla-Chef Elon Musk über sein Gebot für den kauf des Kurznachrichtendienstes.",
//             "url":"https://www.diepresse.com/6130169/twitter-aktionaere-machen-druck-fuer-verhandlungen-mit-musk",
//             "urlToImage":"https://media.diepresse.com/social_diepresse_nachrichten/images/uploads_1200/9/f/9/6130169/19235795-99A3-473A-BD47-1C732A54458F_v0_l.jpg",
//             "publishedAt":"2022-04-25T05:31:00Z",
//             "content":"Insidern zufolge verhandelt der Konzern mit Tesla-Chef Elon Musk über sein Gebot für den kauf des Kurznachrichtendienstes.\r\nDie Konzernführung von Twitter ist Insidern zufolge auf Druck der Aktionäre… [+1990 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"Faz.net"
//                 },
//             "author":"Reuters/dpa",
//             "title":"Twitter verhandelt mit Elon Musk über Verkauf",
//             "description":"Vor rund zehn Tagen hat Tesla-Chef Elon Musk die Absicht bekundet, Twitter übernehmen zu wollen. Daraufhin hat Twitter zunächst eine als „Giftpille“ bekannte Strategie aufgelegt, um die Übernahme abzuwehren. Nun wird auf Druck der Aktionäre offenbar verhandel…",
//             "url":"https://www.faz.net/aktuell/wirtschaft/auf-druck-der-aktionaere-twitter-verhandelt-mit-elon-musk-ueber-verkauf-17981206.html",
//             "urlToImage":"https://media0.faz.net/ppmedia/aktuell/wirtschaft/1922938941/1.7981218/facebook_teaser/elon-musk.jpg",
//             "publishedAt":"2022-04-25T05:30:40Z",
//             "content":"Die Konzernführung von Twitter ist Insidern zufolge auf Druck der Aktionäre in Verhandlungen mit Tesla-Chef Elon Musk über sein Gebot für den Kurznachrichtendienst. Die Entscheidung sei am Sonntag ge… [+2021 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"The Indian Express"
//                 },
//             "author":"Reuters",
//             "title":"First all-private astronaut team aboard space station undocks for flight home",
//             "description":"Axiom, NASA and SpaceX have touted the mission as a turning point in the expansion of privately funded space-based commerce, constituting what industry insiders call the \"low-Earth orbit economy,\" or \"LEO economy\" for short.",
//             "url":"https://indianexpress.com/article/world/private-astronauts-international-space-station-spacex-crew-dragon-7885912/",
//             "urlToImage":"https://images.indianexpress.com/2022/04/FQygs5KUUAIKTFv.jpg",
//             "publishedAt":"2022-04-25T05:28:55Z",
//             "content":"The first all-private astronaut team ever to fly aboard the International Space Station (ISS) departed the orbiting outpost on Sunday to begin a descent back to Earth, capping a two-week science miss… [+3255 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"Sputnik International"
//             },
//             "author":"Svetlana Ekimenko",
//             "title":"Twitter May 'Take Closer Look' at Elon Musk’s Bid After Tesla CEO Secured Funding For Buyout",
//             "description":"After Twitter's board of directors adopted a limited-term shareholder rights plan called a \"poison pill\" on 15 April to render it more difficult for Elon Musk to acquire the company, the Tesla CEO, who currently owns 9.2 percent of the micro-blogging site's s…",
//             "url":"https://sputniknews.com/20220425/twitter-may-take-closer-look-at-elon-musks-bid-after-tesla-ceo-secured-funding-for-buyout-1095024877.html",
//             "urlToImage":"https://cdnn1.img.sputniknews.com/images/sharing/article/eng/1095024877.jpg?10948232221650863914",
//             "publishedAt":"2022-04-25T05:18:33Z",
//             "content":"And authenticate all real humans\r\n— Elon Musk (@elonmusk) April 21, 2022"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"Shiftdelete.net"
//             },
//             "author":"Gökberk Baycan",
//             "title":"Elon Musk, İstanbul’un trafik sorununu çözebilir mi?",
//             "description":"Musk, İçerisinde İstanbul'un da yer aldığı Dünya'nın en kötü trafiğine sahip şehirleri listesinin altına 'hyperloop' yorumunda bulundu.\nBu içerik ilk olarak Elon Musk, İstanbul’un trafik sorununu çözebilir mi? adresinde yayınlandı Teknoloji Haberleri - ShiftD…",
//             "url":"https://shiftdelete.net/elon-musk-istanbulun-trafik-sorununu-cozebilir-mi",
//             "urlToImage":"https://shiftdelete.net/wp-content/uploads/2022/04/Elon-Musk-Istanbul.jpg",
//             "publishedAt":"2022-04-25T05:16:30Z",
//             "content":"2013 ylnda Elon Musk, düük basnçl bir geçit araclyla 1000 km/s’den daha hzl bir ulam sistemi kurabileceini belirten bir proje yaynlamt. Musk, Aralk 2016‘da ise trafik skkln sona erdirecek çözümler ür… [+2083 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"Gadgets360.com"
//             },
//             "author":"Reuters",
//             "title":"SpaceX Capsule to Begin Earth Descent on Sunday",
//             "description":"Elon Musk's SpaceX Crew Dragon capsule has undocked from the International Space Station (ISS) and will begin a descent back to Earth on Sunday, April 30. The capsule carries an all-private astronaut team from Houston-based startup company Axiom Space.",
//             "url":"https://gadgets360.com/science/news/elon-musk-spacex-crew-dragon-endeavour-axiom-space-iss-undock-descent-earth-2917097",
//             "urlToImage":"https://i.gadgets360cdn.com/large/axiom_mission_nasa_twitter_1650863610668.jpg",
//             "publishedAt":"2022-04-25T05:16:13Z",
//             "content":"The first all-private astronaut team ever to fly aboard the International Space Station (ISS) departed the orbiting outpost on Sunday to begin a descent back to Earth, capping a two-week science miss… [+3174 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"Computerhoy.com"
//             },
//             "author":"Jesús Maturana",
//             "title":"El coste de cargar la batería de los 14 coches eléctricos más populares",
//             "description":"El debate sobre el precio de los combustibles está en boca de todos y, sobre todo, en los bolsillos de cada español. Ir a repostar gasolina o gasóleo supone un acto de gallardía, a la par que de tristeza por el boquete que deja en nuestra cuenta corriente. Po…",
//             "url":"https://computerhoy.com/noticias/motor/coste-cargar-bateria-14-coches-electricos-populares-1048665",
//             "urlToImage":"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/11/coche-electrico-estacion-carga-2538519.jpg?itok=1xThG_M5",
//             "publishedAt":"2022-04-25T05:10:10Z",
//             "content":"El debate sobre el precio de los combustibles está en boca de todos y, sobre todo, en los bolsillos de cada español. Ir a repostar gasolina o gasóleo supone un acto de gallardía, a la par que de tris… [+6593 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"CleanTechnica"
//             },
//             "author":"Johnna Crider",
//             "title":"EV Owners Join Supporters At Connecticut State Capital In Favor Of SB 214",
//             "description":"EV owners across all brands recently showed up in the Connecticut State Capital to show their support for Senate Bill 214. Paul Braren, writer at TinkerTry, was invited and he shared his perspective in a recent post with several photos. Paul noted that Tesla,…",
//             "url":"https://cleantechnica.com/2022/04/25/ev-owners-join-supporters-at-connecticut-state-capital-in-favor-of-sb-214/",
//             "urlToImage":"https://cleantechnica.com/files/2022/04/featured.jpeg",
//             "publishedAt":"2022-04-25T05:09:38Z",
//             "content":"EV owners across all brands recently showed up in the Connecticut State Capital to show their support for Senate Bill 214. Paul Braren, writer at TinkerTry, was invited and he shared his perspective … [+2145 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"Rg.ru"
//             },
//             "author":null,
//             "title":"Доступный \"убийца\" Tesla Model 3 поступил в продажу в Европе",
//             "description":"Компания Xpeng начала продажи седана P5 на рынках европейских стран: в Дании, Нидерландах, Норвегии и Швеции. Главные преимущества перед электрокаром Tesla Model 3 - цена и, хочется верить, качество.",
//             "url":"https://rg.ru/2022/04/25/dostupnyj-ubijca-tesla-model-3-postupil-v-prodazhu-v-evrope.html",
//             "urlToImage":"https://rg.ru//cdnimg.rg.ru/img/content/230/63/14/qqyycewbbpf9_t_650x433.jpg",
//             "publishedAt":"2022-04-25T05:05:00Z",
//             "content":"Xpeng P5 : , , . Tesla Model 3 - , , .\r\nXpeng P5 , 211 .. 310 . 66,2 ·, 491 . 11 10 80% 36 .\r\n Xpeng P5 , , -, XPilot 2.5, , 12,3 , 15,6 , , 17- .\r\n Xpeng P5 48 000 , , Tesla Model 3. , P5.\r\n, Xpeng … [+38 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"Milenio"
//             },
//             "author":"Consejo Editorial",
//             "title":"La p�ldora venenosa de Twitter podr�a ahuyentar a Elon Musk",
//             "description":"Elon Musk, el jefe de Tesla, innovador de los viajes espaciales y el hombre m�s rico del mundo, utiliza muchos sombreros. Pero su deseo de convertirse tambi�n en un magnate de los medios de comunicaci�n del siglo XXI lo oblig� a asumir el papel de un tibur�n …",
//             "url":"https://www.milenio.com/negocios/financial-times/pildora-venenosa-twitter-ahuyentar-elon-musk",
//             "urlToImage":"https://www.milenio.com/uploads/media/2022/04/22/elon-musk-dueno-tesla-foto_0_0_1200_747.jpg",
//             "publishedAt":"2022-04-25T05:00:01Z",
//             "content":"Elon Musk, el jefe de Tesla, innovador de los viajes espaciales y el hombre más rico del mundo, utiliza muchos sombreros. Pero su deseo de convertirse también en un magnate de los medios de comunicac… [+2509 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"Galaxiemedia.fr"
//                 },
//             "author":"Auriane Polge",
//             "title":"Twitter reconsidère l’offre d’achat d’Elon Musk pour 46,5 milliards de dollars",
//             "description":"Twitter serait en train de réexaminer la proposition d’achat d’Elon Musk après que le milliardaire ait confirmé avoir sécurité la somme de 46,5 milliards de dollars. Des responsables du réseau social se sont réunis hier avec Elon Musk pour reconsidérer l’offr…",
//             "url":"https://cms.galaxiemedia.fr/tomsguide/twitter-reconsidere-loffre-dachat-delon-musk-pour-465-milliards-de-dollars/",
//             "urlToImage":"https://cms.galaxiemedia.fr/content/uploads/sites/2/2022/04/elon-musk-twitter-1.jpg",
//             "publishedAt":"2022-04-25T05:00:00Z",
//             "content":"Twitter serait en train de réexaminer la proposition dachat dElon Musk après que le milliardaire ait confirmé avoir sécurité la somme de 46,5 milliards de dollars. Des responsables du réseau social s… [+1996 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"heise online"
//             },
//             "author":"Patrick Bellmer",
//             "title":"heise+ | Strom vs. Strom: Drei gegen Tesla – welches Elektro-SUV fährt günstiger?",
//             "description":"Leistungsstarke Elektro-SUVs mit viel Platz bieten neben Tesla unter anderem auch Ford, Hyundai und Skoda an. Doch welches ist im Alltag günstiger?",
//             "url":"https://www.heise.de/ratgeber/Strom-vs-Strom-Drei-gegen-Tesla-welches-Elektro-SUV-faehrt-guenstiger-6665249.html",
//             "urlToImage":"https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/4/4/8/9/4/2/0x0-ModelY-05-4658079fc6688f16.jpg",
//             "publishedAt":"2022-04-25T05:00:00Z",
//             "content":"Inhaltsverzeichnis\r\nWer ein Elektroauto mit viel Platz für Passagiere und Gepäck sucht, landet mangels entsprechender Kombis und Vans fast zwangsläufig bei SUVs. Das E-SUV-Angebot ist inzwischen groß… [+2025 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"Sostav.ru"
//             },
//             "author":"Sostav.ru",
//             "title":"Маск может начать покупку Twitter уже в апреле",
//             "description":"Акционеры пересмотрели свою позицию по поводу предложения бизнесмена",
//             "url":"https://www.sostav.ru/publication/mask-mozhet-nachat-pokupku-twitter-uzhe-v-aprele-53972.html",
//             "urlToImage":"https://www.sostav.ru/images/news/2022/04/25/preview/53972_social.jpg?rnd=631798",
//             "publishedAt":"2022-04-25T05:00:00Z","content":"Twitter Tesla  Space X    .  ,    , The Wall Street Journal    .\r\n  , $ 46,5 , , . ,       .    , Twitter     .\r\n ,   ,     ,   .   .\r\n  Twitter  9,2%.  ,   , , .   Twitter ,   ."
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"The Indian Express"
//             },
//             "author":"Reuters",
//             "title":"Twitter, under shareholder pressure, begins deal talks with Musk: Sources",
//             "description":"The company's decision to engage with Musk, taken earlier on Sunday, does not mean that it will accept his $43 billion acquisition offer, the sources said.",
//             "url":"https://indianexpress.com/article/world/twitter-under-shareholder-pressure-begins-deal-talks-with-musk-sources-7885838/",
//             "urlToImage":"https://images.indianexpress.com/2022/04/Elon-Musk-Twitter.jpg",
//             "publishedAt":"2022-04-25T04:59:35Z",
//             "content":"Twitter Inc kicked off deal negotiations with Elon Musk on Sunday after he wooed many of the social media company’s shareholders with financing details on his $43 billion acquisition offer, people fa… [+4795 chars]"
//         },
//         {
//             "source":{
//                 "id":"news24",
//                 "name":"News24"
//             },
//             "author":null,
//             "title":"News24.com | Twitter starts negotiations with Musk after facing shareholder pressure",
//             "description":"Twitter kicked off deal negotiations with Elon Musk on Sunday after he wooed many of the social media company's shareholders with financing details on his $43 billion acquisition offer, people familiar with the matter said.",
//             "url":"https://www.news24.com/fin24/Companies/ICT/twitter-starts-negotiations-with-musk-after-facing-shareholder-pressure-20220425",
//             "urlToImage":"https://cdn.24.co.za/files/Cms/General/d/3252/7459451adc2c48b1a426899c6fb73145.jpg",
//             "publishedAt":"2022-04-25T04:54:48Z",
//             "content":"<ul><li>Twitter kicked off negotiations with Elon Musk on Sunday after he wooed many of the social media company's shareholders with financing details for his takeover bid</li><li>Twitter wants to kn… [+5193 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"heise online"
//             },
//             "author":"Martin Holland",
//             "title":"Deal noch diese Woche? – Elon Musk und Twitter verhandeln über Übernahme",
//             "description":"Seit Sonntag verhandelt Twitter laut US-Medien direkt mit Elon Musk. Nach dem ganzen Hin und Her könnte es jetzt ganz schnell gehen.",
//             "url":"https://www.heise.de/news/Deal-noch-diese-Woche-Elon-Musk-und-Twitter-verhandeln-ueber-Uebernahme-7063560.html",
//             "urlToImage":"https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/2/8/3/1/8/shutterstock_2143053743-58929f0065590d66.jpg",
//             "publishedAt":"2022-04-25T04:47:00Z","content":"Der Vorstand von Twitter hat angeblich seine Meinung geändert und Verhandlungen mit Elon Musk begonnen. Eine Übernahme des sozialen Netzwerks durch den US-Milliardär könnte noch in dieser Woche besch… [+3011 chars]"
//         },
//         {
//             "source":{
//                 "id":"nrk",
//                 "name":"NRK"
//             },
//             "author":"NRK",
//             "title":"BBC: Musk i møter med Twitter-styret",
//             "description":"Tesla-gründer Elon musk har vært i samtaler med styret for Twitter flere ganger i helgen, melder BBC. Der har temaet vært Musks planer om å kjøpe Twitter.\nTwitters aksjonærer har tidligere avvist Musks bud på 43 milliarder dollar, tilsvarende 378 milliarder k…",
//             "url":"https://www.nrk.no/nyheter/bbc_-musk-i-moter-med-twitter-styret--1.15942455",
//             "urlToImage":"https://static.nrk.no/nrkno/serum/2.0.471/type/page/img/default.jpg",
//             "publishedAt":"2022-04-25T04:46:56Z",
//             "content":"25. april2022kl.06:46Tesla-gründer Elon musk har vært i samtaler med styret for Twitter flere ganger i helgen, melder BBC. Der har temaet vært Musks planer om å kjøpe Twitter.\r\nTwitters aksjonærer ha… [+250 chars]"
//         },
//         {
//             "source":{
//                 "id":null,
//                 "name":"EURACTIV"
//             },
//             "author":"Eleonora Vasques",
//             "title":"Russian aeroplane arrives in Belgrade via Bulgaria",
//             "description":"A Russian Ilyushin-Il-96-300 passenger aeroplane flew from Sochi to Belgrade via Bulgaria on Sunday morning, although the country officially closed its airspace for Russian planes in February, the Belgrade N1 Television reported. Petar Vojinović, the editor o…",
//             "url":"https://www.euractiv.com/section/politics/short_news/russian-aeroplane-arrives-in-belgrade-via-bulgaria/",
//             "urlToImage":"https://www.euractiv.com/wp-content/uploads/sites/2/2022/04/shutterstock_1059996314-800x450.jpg",
//             "publishedAt":"2022-04-25T04:43:09Z",
//             "content":"A Russian Ilyushin-Il-96-300 passenger aeroplane flew from Sochi to Belgrade via Bulgaria on Sunday morning, although the country officially closed its airspace for Russian planes in February, the Be… [+1457 chars]"
//         },
//         {
//             "source":{
//                 "id":"abc-news-au",
//                 "name":"ABC News (AU)"
//             },
//             "author":"ABC News","title":"Here's what happened when Elon Musk tweeted he was 'moving on'",
//             "description":"Elon Musk posted a cryptic tweet online, fuelling further speculation about his plans to buy Twitter. Here's what we know about the offer and what his mysterious tweet was really about.",
//             "url":"https://www.abc.net.au/news/2022-04-25/elon-musk-moving-on-tweet-bill-gates/101013306",
//             "urlToImage":"https://live-production.wcms.abc-cdn.net.au/cd3d2118f0c94728157de25a2b9da32d?impolicy=wcms_crop_resize&cropH=2767&cropW=4919&xPos=0&yPos=73&width=862&height=485",
//             "publishedAt":"2022-04-25T04:42:23Z",
//             "content":"Billionaire tech mogul Elon Musk has posted a cryptic tweet online which fuelled further speculation about his plans to buy Twitter.\r\nThe tweet was online for hours before Musk clarified that the pos… [+2738 chars]"
//         }
//     ]
// }