DROP TABLE IF EXISTS fleet CASCADE;
DROP TABLE IF EXISTS rank CASCADE;
DROP TABLE IF EXISTS assignment CASCADE;
DROP TABLE IF EXISTS sailor CASCADE;
DROP TABLE IF EXISTS ship CASCADE;


CREATE TABLE fleet (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE ship (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  date_built DATE NOT NULL,
  fleet_id INTEGER NOT NULL REFERENCES fleet(id) ON DELETE CASCADE
);

CREATE TABLE rank (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE sailor (
  id SERIAL PRIMARY KEY NOT NULL,
  ship_id INTEGER NOT NULL REFERENCES ship(id) ON DELETE CASCADE
);


CREATE TABLE assignment (
  id SERIAL PRIMARY KEY NOT NULL,
  start_date  DATE NOT NULL,
  end_date DATE NOT NULL,
  rank_id INTEGER NOT NULL REFERENCES rank(id) ON DELETE CASCADE,
  sailor_id INTEGER NOT NULL REFERENCES sailor(id) ON DELETE CASCADE
);


INSERT INTO fleet (id, name) VALUES(1, 'Iron Fleet');
INSERT INTO fleet (id, name) VALUES(2, 'Happy Fleet');
INSERT INTO fleet (id, name) VALUES(3, 'Bo-Beat Fleet');

INSERT INTO ship (id, name, date_built, fleet_id) VALUES(11, 'Ar Ship!', '2015-01-03', 1 );
INSERT INTO ship (id, name, date_built, fleet_id) VALUES(12, 'Chips Ahoy', '2013-12-09', 1 );
INSERT INTO ship (id, name, date_built, fleet_id) VALUES(13, 'Ship it', '2018-04-01', 1 );
INSERT INTO ship (id, name, date_built, fleet_id) VALUES(21, 'Shipz', '2014-11-23', 2 );
INSERT INTO ship (id, name, date_built, fleet_id) VALUES(22, 'Kawhi Ship', '2017-07-18', 2 );
INSERT INTO ship (id, name, date_built, fleet_id) VALUES(23, 'MVP Ship', '2018-01-01', 2 );
INSERT INTO ship (id, name, date_built, fleet_id) VALUES(31, 'Shippy Whip', '2016-01-02', 3 );
INSERT INTO ship (id, name, date_built, fleet_id) VALUES(32, 'Sha-IP', '2017-06-08', 3 );
INSERT INTO ship (id, name, date_built, fleet_id) VALUES(33, 'Shhhhhhhip', '2015-11-01', 3 );

INSERT INTO sailor (id, ship_id) VALUES(1, 11);
INSERT INTO sailor (id, ship_id) VALUES(2, 12);
INSERT INTO sailor (id, ship_id) VALUES(3, 13);
INSERT INTO sailor (id, ship_id) VALUES(4, 21);
INSERT INTO sailor (id, ship_id) VALUES(5, 22);
INSERT INTO sailor (id, ship_id) VALUES(6, 23);
INSERT INTO sailor (id, ship_id) VALUES(7, 31);
INSERT INTO sailor (id, ship_id) VALUES(8, 32);
INSERT INTO sailor (id, ship_id) VALUES(9, 33);

INSERT INTO rank (id, name) VALUES(1000, 'Gold' );
INSERT INTO rank (id, name) VALUES(2000, 'Silver' );
INSERT INTO rank (id, name) VALUES(3000, 'Bronze' );

INSERT INTO assignment (id, start_date, end_date, rank_id, sailor_id) VALUES(100, '2019-07-24', '2019-10-24', 3000, 2);
INSERT INTO assignment (id, start_date, end_date, rank_id, sailor_id) VALUES(200, '2019-07-30', '2019-11-15', 1000, 1);
INSERT INTO assignment (id, start_date, end_date, rank_id, sailor_id) VALUES(300, '2019-08-01', '2019-10-01', 2000, 3);
INSERT INTO assignment (id, start_date, end_date, rank_id, sailor_id) VALUES(111, '2018-01-02', '2018-03-02', 1000, 4);
INSERT INTO assignment (id, start_date, end_date, rank_id, sailor_id) VALUES(222, '2018-01-14', '2018-02-02', 2000, 5);
INSERT INTO assignment (id, start_date, end_date, rank_id, sailor_id) VALUES(333, '2018-02-17', '2018-04-02', 2000, 6);
INSERT INTO assignment (id, start_date, end_date, rank_id, sailor_id) VALUES(101, '2017-04-03', '2018-03-11', 3000, 7);
INSERT INTO assignment (id, start_date, end_date, rank_id, sailor_id) VALUES(202, '2017-11-24', '2018-02-20', 3000, 8);
INSERT INTO assignment (id, start_date, end_date, rank_id, sailor_id) VALUES(303, '2017-11-30', '2018-09-02', 1000, 9);

