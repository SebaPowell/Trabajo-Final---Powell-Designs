-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 27-06-2022 a las 19:54:38
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `powell_designs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

DROP TABLE IF EXISTS `galeria`;
CREATE TABLE IF NOT EXISTS `galeria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) DEFAULT NULL,
  `imagen` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `galeria`
--

INSERT INTO `galeria` (`id`, `titulo`, `imagen`) VALUES
(3, 'Couple', 'ydysyt3gywbizu5sdnrj'),
(1, 'Tattoo Girl', 'uw0jzv0f7n5asrz66vjw'),
(2, 'Cat Girl', 'qsplyrxj7msfhvnpuf3z'),
(4, 'Diablita', 'kpfbwu2tyukxbbxqmgyc'),
(5, 'Dragon Tattoo Girl', 'blogtixdb5nzic3zm42c'),
(6, 'Girl Hurt', 'u1y9jqwn0ezbcnjzfclt'),
(7, 'Fuck Girl', 'efgqar42n7wk23yhk7j6'),
(8, 'Goku', 'hyq1v6bbd6ikawjuzoov'),
(9, 'Goku', 'ytibpzvia3xovfjtjbrf'),
(10, 'Poker Girl', 'an8vp7jtzhgzbsgx6th0'),
(11, 'India', 'zc12xdxzdqi0px0trfet'),
(12, 'Samurai', 'sec3oqlxm7rcdaqhziyc'),
(13, 'School Girl', 'vhjc6jfll4y9ipb6sbwu'),
(14, 'Violet', 'fyf4jhqpvgrpbsf5dkdk'),
(15, 'Amazona', 'fcnyuur73ywap2z0wenc'),
(16, 'Rulos', 'lqjtmak8dukpgmj0yrwk'),
(17, 'Aang', 'zckruqzgs6o8vm50ofrl'),
(18, 'Hellboy', 'dgge6mbt6nxt3ndejwfx'),
(19, 'Piccolo', 'wrtih2qfzrskctgikcei'),
(20, 'Piccolo', 'dwewngxmwsheejfjjykz'),
(21, 'Piccolo', 'ihkokm6qhnotjyeqjggg'),
(22, 'Jules', 'sakgtvenw0hstofrxajk'),
(23, 'Magin Boo', 'hafleklpxshfzregjpji'),
(24, 'Girl Face', 'blizjtwyktpgwbbaom9c');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria2`
--

DROP TABLE IF EXISTS `galeria2`;
CREATE TABLE IF NOT EXISTS `galeria2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) DEFAULT NULL,
  `imagen` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `galeria2`
--

INSERT INTO `galeria2` (`id`, `titulo`, `imagen`) VALUES
(3, 'Cat Girl', 'pbgwwiuk0dwkamawrppx'),
(1, 'Girl Face', 'ngrphyx484h3nhmpy9s0'),
(4, 'Diablita', 'ysii6nyfkz6hhrhznglm'),
(5, 'Darksiders', 'rub9dgjjkfgt4d4ixipe'),
(6, 'Malefica', 'as4nqqw44vhllzmqtboy'),
(7, 'Couple', 'aptiwlfaleughiw0v6xd'),
(8, 'Caballo', 'g0zrxc1agj0ytwmlxsxc'),
(9, 'Tattoo Girl', 'bzvfi0xecettfkwvhzqw'),
(10, 'Red Head', 'gkcqum8jhk8ge8bwxxp9'),
(11, 'Nirvana', 'ykawrly0hviohuoc6csu'),
(12, 'Varios', 'ec6lpgla18lmo0aivpqg'),
(13, 'Deadpool', 'syztqqnfv2cpe4yc99lz'),
(14, 'Hellboy', 'qx3wlagyzv7l5usaxena'),
(15, 'Poker Girl', 'nbomneqkydkggdcthwm4'),
(16, 'Linkin Park', 'oqg3jnrfh2oyueodpvu7'),
(17, 'Goku', 'ruie7m3so1swkukujkfd'),
(18, 'Piccolo', 'tfjmqsyxa7cbmoya3ayi'),
(19, 'India', 'vs77znmrqwwupegpp5ju'),
(20, 'Varios', 'ck2anbxdkc8mnzjdzlye'),
(21, 'Varios', 'ikgd0l1qp6ezusabgity');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

DROP TABLE IF EXISTS `noticias`;
CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `texto` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `texto`) VALUES
(1, '¿Qué es la ilustración?', 'Sumerjámonos en una definición de ilustración. En resumen, la ilustración es una visualización hecha por un artista. Es un dibujo (o pintura, collage, grabado, foto, etc.) que explica algo. No es necesario que la ilustración sea dibujada, una foto en una enciclopedia es también una ilustración, porque explica lo que está escrito. Así que si tu dibujo no explica algo, es una obra de arte, no una ilustración. \r\nUna ilustración puede explicar una idea incluso sin el texto cerca. La gente que mira el dibujo debería ver la historia, \"leerla\" como lo haría con el texto. Contar una historia con una ilustración significa transmitir algún significado, explicar un determinado contexto solo con la ayuda de una imagen.'),
(2, 'Tipos de ilustraciones', 'Ilustraciones conceptuales: son representaciones metafóricas (no realistas) de escenas, objetos, ideas o teorías. Las imágenes pueden contener elementos de la realidad, pero en su conjunto tienen una forma o significado diferente.Ejemplos de ilustración conceptual incluirían historietas, gráficos, dibujos abstractos… \r\n\r\nIlustraciones literales:\r\nestas ilustraciones tienden a representar verdades pictóricas. Aquí hay generalmente una descripción exacta de la realidad, e incluso si la imagen representa la ficción narrativa de carácter fantástico o dramática, se hace hincapié en la creación de una escena que sea creíble. Ejemplos de ilustración literal incluirían los siguientes: foto realismo, hiperrealismo, etc.'),
(12, 'La diferencia entre el diseño gráfico y la ilustración', 'Por lo general, los diseñadores gráficos trabajan con objetos ya hechos, y su tarea es crear composiciones adecuadas a partir de ellos. Los ilustradores crean productos por sí mismos (aunque sean collages).\r\nLa principal tarea del diseñador es crear un producto exitoso que cumpla con los requisitos del cliente y las necesidades del público objetivo.\r\nUn buen ilustrador también pensará en las necesidades de su cliente y público objetivo, pero debe centrarse más en la imagen en sí misma, en lugar de en los objetivos de marketing, en los que el diseñador ya ha pensado!');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'admin', '5f4dcc3b5aa765d61d8327deb882cf99'),
(2, 'Seba', 'a213d28f50b0052657636f16af438a77');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
