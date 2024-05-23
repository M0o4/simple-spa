export default {
    style: () => 'home.css',
    render:  () => `
    <div class="main">
      <h1>Главные темы</h1>

      <div class="main__news">
        <div class="main__news-card">
          <span class="main__card-title">Фестиваль «Рыбная неделя»</span>
          <img
            src="https://www.mos.ru/upload/newsfeed/news/02a17a9d41c86f0db20dc266336f1858/gl.jpg"
            class="main__news-card-img"
          />
          <span
            >В этом году к нему присоединится более трех тысяч сетевых
            магазинов, свыше 140 рынков и ярмарок.</span
          >
        </div>

        <div class="main__news-card">
          <span class="main__card-title"
            >В Москве откроют 65-й летний трудовой сезон студенческих
            отрядов</span
          >
          <img
            src="https://www.mos.ru/upload/newsfeed/articles/e7fadb4a751ddb772688bf34abf68d0d/_GL_KOS.jpg"
            class="main__news-card-img"
          />
          <span
            >Студенты столичных вузов будут работать строителями, проводниками
            на поездах, вожатыми в детских лагерях, поучаствуют в сборе урожая и
            археологических раскопках, а также отправятся на камчатские заводы
            по переработке рыбы.</span
          >
        </div>

        <div class="main__news-card">
          <span class="main__card-title"
            >В Дмитровском районе построят дом по программе реновации</span
          >
          <img
            src="https://www.mos.ru/upload/newsfeed/articles/bd9f0ed002876d824aa6097ace7b2048/renova_Dmitrovskoe-shosse_23_05.jpg"
            class="main__news-card-img"
          />
          <span>Он будет располагаться на Дмитровском шоссе.</span>
        </div>

        <div class="main__news-card">
          <span class="main__card-title"
            >Детский сад и школа: крупный образовательный комплекс построят на
            юге Москвы</span
          >
          <img
            src="https://www.mos.ru/upload/newsfeed/articles/7181d54cc8933542f70b8a00cdda432c/577714.jpg"
            class="main__news-card-img"
          />
          <span
            >Под его строительство выделили земельный участок общей площадью
            4,29 гектара в Востряковском проезде.</span
          >
        </div>
      </div>
    </div>

    <div class="hot-news">
      <h2>
        Профессиональные гиды и более 40 авторских маршрутов: чем удивит проект
        «Экскурсии в метро»
      </h2>
      <img
        src="https://www.mos.ru/upload/newsfeed/articles/134fc966761f3e40e2c64552941fd3d2/ekskursii_metro_23_05.jpg"
        class="hot-news__img"
      />
      <h3>
        В Московском метрополитене проходят различные экскурсии: обзорные,
        исторические, архитектурные, культурные и военные.
      </h3>
      <p>
        Исполняется год с момента перезапуска проекта «Экскурсии в метро».
        Благодаря ему туристы и жители столицы знакомятся с богатой многолетней
        историей и культурой Московского метрополитена. Экскурсии проводят
        профессиональные гиды.
      </p>
      <hr />
      <p>
        «Проект “Экскурсии в метро” успешно развивается. За год провели 268
        экскурсий для более чем двух тысяч пассажиров. Число аккредитованных
        экскурсоводов увеличилось вдвое, а москвичам теперь доступно свыше 40
        авторских маршрутов», — рассказал заместитель Мэра Москвы по вопросам
        транспорта Максим Ликсутов.
      </p>

      <div class="hot-news__review">
        <h4>Оценка новости</h4>
        <label for="name">
          Имя
          <input id="name" type="text" placeholder="Имя" />
        </label>
        <select name="review">
          <option value="👍" selected>👍</option>
          <option value="👎">👎</option>
        </select>
        <button>Отправить</button>
      </div>
    </div>
`
}