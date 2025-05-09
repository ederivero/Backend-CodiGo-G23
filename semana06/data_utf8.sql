--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: platos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.platos (id, nombre, descripcion) FROM stdin;
1	Ceviche	Delicio plato peruano con pescado del dia
2	Aji de Gallina	Delicioso plato peruano que usa pollo
3	Carapulcra	La mejor forma de comer la comida guardada
4	Causa	Plato bandera de origen peruano
5	Fricase	Delicioso caldo de cerdo altoandino boliviano
6	Tizana	Refrescante bebida para estas tardes de calor
7	Caldo de Gallina	Delicioso caldo de gallina limeño con arto concentrado
8	Lomo Saltado	Delicioso plato acompañado de huevo y papas huamantay
9	Lomo Saltado	Delicioso plato acompañado de huevo y papas huamantay
\.


--
-- Data for Name: ingredientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ingredientes (id, nombre, cantidad, plato_id) FROM stdin;
2	Escencia de Vainilla	1 cdta	1
\.


--
-- Name: ingredientes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ingredientes_id_seq', 2, true);


--
-- Name: platos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.platos_id_seq', 9, true);


--
-- PostgreSQL database dump complete
--

