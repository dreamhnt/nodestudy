```
create database nodestudy;
use nodestudy;

create table MEMBER (
	ID 	varchar(20) NOT NULL primary key,
	PWD	varchar(20) NOT NULL,
	NAME varchar(10) NOT NULL
)DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; 
select * from MEMBER; 

create table MOVIE (
	MOVIENUM INT NOT NULL auto_increment primary key ,
	TATLE	varchar(30) NOT NULL,
	SUMMARY	varchar(300) NOT NULL,
	CLASS	INT ,
	POSTER 	varchar(50) ,
	FIRST	date
)DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; 
select * from MOVIE;

create table CINEMA(
	CINEMANUM	INT NOT NULL auto_increment primary key ,
	AREA  varchar(30) NOT NULL,
	ROOM  varchar(30) NOT NULL,
	TOTAL  INT NOT NULL
) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; 
select * from CINEMA;

create table RESERVATION(
	RESERVATIONNUM 	INT NOT NULL auto_increment primary key ,
	MOVIENUM INT NOT NULL,
	FOREIGN KEY (MOVIENUM) REFERENCES MOVIE (MOVIENUM),
	CINEMANUM INT NOT NULL,
	FOREIGN KEY (CINEMANUM) REFERENCES CINEMA (CINEMANUM),
	ID 	varchar(20) NOT NULL,
	FOREIGN KEY (ID) REFERENCES MEMBER (ID),
	SUM INT NOT NULL
) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; 
select * from RESERVATION;

create table SCHEDULE(
	MOVIENUM int not null,
	FOREIGN KEY (MOVIENUM) REFERENCES MOVIE (MOVIENUM),
	CINEMANUM int not null,
	FOREIGN KEY (CINEMANUM) REFERENCES CINEMA (CINEMANUM),
	TIME	datetime not null
) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; 
select * from SCHEDULE;


INSERT INTO MEMBER value ('yoojs','12345','유재석');
select * from MEMBER; 
```