INSERT INTO auth.users (id, email)
VALUES
('550e8400-e29b-41d4-a716-446655440000', 'joonas.tamm@example.com'),
('550e8400-e29b-41d4-a716-446655440001', 'rudolf.poder@example.com'),
('550e8400-e29b-41d4-a716-446655440002', 'mihkel.valgu@example.com'),
('550e8400-e29b-41d4-a716-446655440003', 'inimene.eitea@example.com');

-- Step 2: Populate public.users
INSERT INTO public.users (id, name, email)
VALUES
('550e8400-e29b-41d4-a716-446655440000', 'Joonas Tamm', 'joonas.tamm@example.com'),
('550e8400-e29b-41d4-a716-446655440001', 'Rudolf Põder', 'rudolf.poder@example.com'),
('550e8400-e29b-41d4-a716-446655440002', 'Mihkel Välgu', 'mihkel.valgu@example.com'),
('550e8400-e29b-41d4-a716-446655440003', 'Inimene Eitea', 'inimene.eitea@example.com');


insert into
public.institutes (name)
values
('Tallinna Ülikool'),
('Balti filmi, meedia ja kunstide instituut'),
('Digitehnoloogiate instituut'),
('Haridusteaduste instituut'),
('Humanitaarteaduste instituut'),
('Loodus- ja terviseteaduste instituut'),
('Ühiskonnateaduste instituut'),
('Haapsalu kolledž');

insert into
public.event_types (name)
values
('Koolitus'),
('Doktoritöö kaitsmine'),
('Teadussündmus'),
('Avalik loeng'),
('Seminar'),
('Aktus'),
('Konverents'),
('Muu sündmus');

INSERT INTO public.pages (title, content, author, institute, deleted)
VALUES
-- Page for an institute overview
('Tallinna Ülikooli Ülevaade', 
'Tallinna Ülikool on üks Eesti juhtivaid ülikoole, pakkudes laia valikut bakalaureuse-, magistri- ja doktoriõppe programme.', 
'550e8400-e29b-41d4-a716-446655440000', -- Joonas Tamm's UUID
1, -- 'Tallinna Ülikool' (ID = 1) as the institute
false),

-- Page for an event announcement
('Seminar: Teaduse ja tehnoloogia ristteed', 
 'Liituge meie seminariga, kus arutleme, kuidas teadus ja tehnoloogia muudavad meie igapäevaelu.', 
 '550e8400-e29b-41d4-a716-446655440001', -- Rudolf Põder's UUID
 3, -- 'Digitehnoloogiate instituut' (ID = 3) as the institute
 false),

-- Page for course information
('Õppeaine: Multimeedia tehnoloogiad', 
 'Selles õppeaines uurime, kuidas luua kaasaegseid multimeediarakendusi, sealhulgas filme ja interaktiivseid platvorme.', 
 '550e8400-e29b-41d4-a716-446655440002', -- Mihkel Välgu's UUID
 2, -- 'Balti filmi, meedia ja kunstide instituut' (ID = 2) as the institute
 false),

-- Page for an event report
('Teadussündmus: Rohepöörde võimalused', 
 'Arutelu keskmes oli, kuidas Eesti ülikoolid saavad panustada jätkusuutlikkuse edendamisse.', 
 '550e8400-e29b-41d4-a716-446655440003', -- Inimene Eitea's UUID
 6, -- 'Loodus- ja terviseteaduste instituut' (ID = 6) as the institute
 false),

-- Archived page
('Ajalooline vaade: Tallinna Ülikooli areng', 
 'Ülevaade Tallinna Ülikooli ajaloost ja olulisematest verstapostidest.', 
 '550e8400-e29b-41d4-a716-446655440000', -- Joonas Tamm's UUID
 1, -- 'Tallinna Ülikool' (ID = 1) as the institute
 true); -- Marked as deleted

INSERT INTO public.events (author, title, start_time, end_time, institute, cancelled, type, location)
VALUES
('550e8400-e29b-41d4-a716-446655440001', -- Rudolf Põder's UUID
 'Doktoritöö kaitsmine: Tehisintellekti mõju ühiskonnale',
 '2024-01-15 10:00:00+02', '2024-01-15 12:00:00+02',
 1, false, 2, 'Tallinna Ülikooli peahoone, ruum A-101'),

('550e8400-e29b-41d4-a716-446655440002', -- Mihkel Välgu's UUID
 'Avalik loeng: Eesti digitehnoloogiate tulevik',
 '2024-02-10 14:00:00+02', '2024-02-10 16:00:00+02',
 3, false, 4, 'Digitehnoloogiate instituut, auditoorium 3-204'),

('550e8400-e29b-41d4-a716-446655440000', -- Joonas Tamm's UUID
 'Konverents: Eesti teaduse väljakutsed ja lahendused',
 '2024-03-05 09:00:00+02', '2024-03-05 17:00:00+02',
 6, false, 7, 'Tallinna Ülikooli aula'),

('550e8400-e29b-41d4-a716-446655440003', -- Inimene Eitea's UUID
 'Seminar: Rohepöörde praktilised sammud',
 '2024-04-20 13:00:00+02', '2024-04-20 15:30:00+02',
 6, false, 5, 'Tallinna Ülikooli rohelise arengu labor'),

('550e8400-e29b-41d4-a716-446655440000', -- Joonas Tamm's UUID
 'Koolitus: Andmete analüüsi põhialused',
 '2024-05-10 09:00:00+02', '2024-05-10 12:00:00+02',
 3, true, 1, 'Digitehnoloogiate instituut, arvutiklass 1-101');

 -- Insert sample posts into the posts table
INSERT INTO posts (title, content, users_id)
VALUES
('The Future of AI in Education', 
 'Artificial Intelligence is transforming the way we learn and teach. In this post, we explore the potential of AI-driven tools in creating personalized education experiences.',
 '550e8400-e29b-41d4-a716-446655440000'), -- Joonas Tamm's UUID

('Sustainability in Modern Architecture', 
 'Sustainability is more than a buzzword; it is a necessity for modern architecture. Discover how innovative designs are shaping greener cities.',
 '550e8400-e29b-41d4-a716-446655440001'), -- Rudolf Põder's UUID

('Digital Transformation in Healthcare', 
 'Healthcare systems are undergoing a digital revolution. This post dives into the latest technologies, from telemedicine to AI diagnostics, that are reshaping patient care.',
 '550e8400-e29b-41d4-a716-446655440002'); -- Mihkel Välgu's UUID
