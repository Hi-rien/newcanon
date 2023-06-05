
create table member (
  id varchar(10) not null,
  pass varchar(10) not null,
  name varchar(10) not null,
  hp varchar(20) not null,
  email varchar(50),
  addr varchar(50),
  primary key(id)
)engine=innoDB charset=utf8;