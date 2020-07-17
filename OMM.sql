CREATE TABLE `Mentors` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mentor_name` varchar(255),
  `nickname` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `sex` varchar(255),
  `phone` varchar(255),
  `birthday` varchar(255),
  `certification_path` varchar(255),
  `intro` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `Mentees` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mentee_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `sex` varchar(255),
  `phone` varchar(255),
  `birthday` varchar(255),
  `point` int,
  `created_at` timestamp
);

CREATE TABLE `Lecture` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `lecture_name` varchar(255),
  `intro` varchar(255),
  `curriculum_path` varchar(255),
  `purchase` varchar(255),
  `blog` varchar(255),
  `etc` varchar(255),
  `mentor_id` int,
  `created_at` timestamp
);

CREATE TABLE `Tag` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `tag_name` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `LectureTag` (
  `lecture_id` int,
  `tag_id` int
);

CREATE TABLE `LectureReservation` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `lecture_id` int,
  `reservation_datetime` datetime,
  `max` int,
  `class_link` varchar(255),
  `status` Enum,
  `created_at` timestamp
);

CREATE TABLE `Reservation` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mentee_id` int,
  `Lecture_reservation_id` int,
  `created_at` timestamp
);

CREATE TABLE `ApplyLecture` (
  `lecture_id` int,
  `mentee_id` int
);

CREATE TABLE `ChatRooms` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `lecture_id` int
);

CREATE TABLE `ChatPeople` (
  `chatroom_id` int,
  `person_id` int,
  `type` varchar(255)
);

ALTER TABLE `LectureTag` ADD FOREIGN KEY (`lecture_id`) REFERENCES `Lecture` (`id`);

ALTER TABLE `LectureTag` ADD FOREIGN KEY (`tag_id`) REFERENCES `Tag` (`id`);

ALTER TABLE `Lecture` ADD FOREIGN KEY (`mentor_id`) REFERENCES `Mentors` (`id`);

ALTER TABLE `ApplyLecture` ADD FOREIGN KEY (`mentee_id`) REFERENCES `Mentees` (`id`);

ALTER TABLE `ApplyLecture` ADD FOREIGN KEY (`lecture_id`) REFERENCES `Lecture` (`id`);

ALTER TABLE `LectureReservation` ADD FOREIGN KEY (`lecture_id`) REFERENCES `Lecture` (`id`);

ALTER TABLE `Reservation` ADD FOREIGN KEY (`mentee_id`) REFERENCES `Mentees` (`id`);

ALTER TABLE `Reservation` ADD FOREIGN KEY (`Lecture_reservation_id`) REFERENCES `LectureReservation` (`id`);

ALTER TABLE `ChatRooms` ADD FOREIGN KEY (`lecture_id`) REFERENCES `Lecture` (`id`);

ALTER TABLE `ChatPeople` ADD FOREIGN KEY (`chatroom_id`) REFERENCES `ChatRooms` (`id`);
