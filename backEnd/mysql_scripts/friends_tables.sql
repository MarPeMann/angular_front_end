create table user(
	user_id int NOT NULL UNIQUE AUTO_INCREMENT,
    username varchar(255) NOT NULL UNIQUE,
    pass varchar(255) NOT NULL,
    primary key(user_id)

)Engine=InnoDb;

create table friend(
	friend_id int NOT NULL UNIQUE AUTO_INCREMENT,
    friend_name varchar(255),
    friend_address varchar(255),
    friend_age int,
    user_id int,
    primary key(friend_id),
    foreign key(user_id) references user(user_id)

)Engine=InnoDb;