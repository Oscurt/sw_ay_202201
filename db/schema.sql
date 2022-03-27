create table Usuario (
	id serial not null,
	usuario varchar(15) not null,
	clave varchar(30) not null
);

create table Todo (
	id serial not null,
	user_id serial not null,
	titulo varchar(30) not null,
	descrip text not null
);
