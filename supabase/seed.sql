-- in supabase/seed.sql
insert into
public.users (name)
values
('Joonas Tamm'),
('Rudolf Põder'),
('Mihkel Välgu'),
('Inimene Eitea');

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
 1, -- Assuming 'Joonas Tamm' (ID = 1) is the author
 1, -- 'Tallinna Ülikool' (ID = 1) as the institute
 false),

-- Page for an event announcement
('Seminar: Teaduse ja tehnoloogia ristteed', 
 'Liituge meie seminariga, kus arutleme, kuidas teadus ja tehnoloogia muudavad meie igapäevaelu.', 
 2, -- Assuming 'Rudolf Põder' (ID = 2) is the author
 3, -- 'Digitehnoloogiate instituut' (ID = 3) as the institute
 false),

-- Page for course information
('Õppeaine: Multimeedia tehnoloogiad', 
 'Selles õppeaines uurime, kuidas luua kaasaegseid multimeediarakendusi, sealhulgas filme ja interaktiivseid platvorme.', 
 3, -- Assuming 'Mihkel Välgu' (ID = 3) is the author
 2, -- 'Balti filmi, meedia ja kunstide instituut' (ID = 2) as the institute
 false),

-- Page for an event report
('Teadussündmus: Rohepöörde võimalused', 
 'Arutelu keskmes oli, kuidas Eesti ülikoolid saavad panustada jätkusuutlikkuse edendamisse.', 
 4, -- Assuming 'Inimene Eitea' (ID = 4) is the author
 6, -- 'Loodus- ja terviseteaduste instituut' (ID = 6) as the institute
 false),

-- Archived page
('Ajalooline vaade: Tallinna Ülikooli areng', 
 'Ülevaade Tallinna Ülikooli ajaloost ja olulisematest verstapostidest.', 
 1, -- 'Joonas Tamm' (ID = 1) as the author
 1, -- 'Tallinna Ülikool' (ID = 1) as the institute
 true); -- Marked as deleted

 INSERT INTO public.events (author, title, start_time, end_time, institute, cancelled, type, location)
VALUES
-- Event: Doctoral Thesis Defense
(2, -- Assuming 'Rudolf Põder' (ID = 2) is the author
 'Doktoritöö kaitsmine: Tehisintellekti mõju ühiskonnale', 
 '2024-01-15 10:00:00+02', -- Start time
 '2024-01-15 12:00:00+02', -- End time
 1, -- 'Tallinna Ülikool' (ID = 1) as the institute
 false, -- Event is not cancelled
 2, -- 'Doktoritöö kaitsmine' (ID = 2) as the event type
 'Tallinna Ülikooli peahoone, ruum A-101'), -- Location

-- Event: Public Lecture
(3, -- 'Mihkel Välgu' (ID = 3) as the author
 'Avalik loeng: Eesti digitehnoloogiate tulevik', 
 '2024-02-10 14:00:00+02', -- Start time
 '2024-02-10 16:00:00+02', -- End time
 3, -- 'Digitehnoloogiate instituut' (ID = 3) as the institute
 false, -- Event is not cancelled
 4, -- 'Avalik loeng' (ID = 4) as the event type
 'Digitehnoloogiate instituut, auditoorium 3-204'), -- Location

-- Event: Science Conference
(1, -- 'Joonas Tamm' (ID = 1) as the author
 'Konverents: Eesti teaduse väljakutsed ja lahendused', 
 '2024-03-05 09:00:00+02', -- Start time
 '2024-03-05 17:00:00+02', -- End time
 6, -- 'Loodus- ja terviseteaduste instituut' (ID = 6) as the institute
 false, -- Event is not cancelled
 7, -- 'Konverents' (ID = 7) as the event type
 'Tallinna Ülikooli aula'), -- Location

-- Event: Seminar
(4, -- 'Inimene Eitea' (ID = 4) as the author
 'Seminar: Rohepöörde praktilised sammud', 
 '2024-04-20 13:00:00+02', -- Start time
 '2024-04-20 15:30:00+02', -- End time
 6, -- 'Loodus- ja terviseteaduste instituut' (ID = 6) as the institute
 false, -- Event is not cancelled
 5, -- 'Seminar' (ID = 5) as the event type
 'Tallinna Ülikooli rohelise arengu labor'), -- Location

-- Cancelled Event
(1, -- 'Joonas Tamm' (ID = 1) as the author
 'Koolitus: Andmete analüüsi põhialused', 
 '2024-05-10 09:00:00+02', -- Start time
 '2024-05-10 12:00:00+02', -- End time
 3, -- 'Digitehnoloogiate instituut' (ID = 3) as the institute
 true, -- Event is cancelled
 1, -- 'Koolitus' (ID = 1) as the event type
 'Digitehnoloogiate instituut, arvutiklass 1-101'); -- Location
