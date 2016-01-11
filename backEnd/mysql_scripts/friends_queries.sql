select * from user;

select username from user;

select username,pass from user;

select * from user where username="johndoe";

select * from user where pass="testi" order by username;

select * from friend;

select user.username, friend.friend_name, friend.friend_address,friend.friend_age age from
user inner join friend on user.user_id=friend.user_id;

CALL getAllUsers();

CALL getLoginInfo("johndoe","testi");
