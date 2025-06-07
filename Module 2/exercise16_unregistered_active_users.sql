SELECT 
    u.full_name,
    u.email,
    u.registration_date
FROM 
    Users u
LEFT JOIN 
    Registrations r ON u.user_id = r.user_id
WHERE 
    u.registration_date >= CURDATE() - INTERVAL 30 DAY
    AND r.user_id IS NULL;