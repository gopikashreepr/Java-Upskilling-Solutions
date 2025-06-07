
-- Exercise 9: Organizer Event Summary
SELECT 
    u.full_name AS organizer,
    e.status,
    COUNT(e.event_id) AS event_count
FROM 
    Users u
JOIN 
    Events e ON u.user_id = e.organizer_id
GROUP BY 
    u.user_id, e.status;
