use std::fmt::Display;

#[derive(Debug, PartialEq, Eq)]
pub struct Clock {
    hours: i32,
    minutes: i32,
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        if minutes > 59 || minutes < 0 {
            let extra_hours = minutes.div_euclid(60);
            let new_minutes = minutes.rem_euclid(60);
            
            return Clock::new(hours + extra_hours, new_minutes);
        }

        if hours > 23 || hours < 0 {
            let new_hours = hours.rem_euclid(24);
            return Clock::new(new_hours, minutes);
        }

        let hours = hours.rem_euclid(24);
        let minutes = minutes.rem_euclid(60);

        return Clock { hours, minutes };
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        return Clock::new(self.hours, self.minutes + minutes);
    }
}

impl Display for Clock {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{:02}:{:02}", self.hours, self.minutes)
    }
}
