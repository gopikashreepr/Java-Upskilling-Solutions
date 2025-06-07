
-- Exercise 6: Event Resource Summary
SELECT 
    e.title,
    r.resource_type,
    COUNT(r.resource_id) AS resource_count
FROM 
    Events e
JOIN 
    Resources r ON e.event_id = r.event_id
GROUP BY 
    e.event_id, r.resource_type;
