# BIT ORGANISATION TOOL 
This is all the assets according to specification from the Ministry of Budgets in vanilla format

## App Specifications
### Data collection
The app is to keep track of the following data points

#### File Records
Each file needs the following information about them in the system. Please note that everything needs to be datetime as they want to keep track of time as well
```
model filerecords {
  id                      String    @id @default(cuid())
  mda                     String
  assignedGroup           String
  fileTitle               String
  fileNumber              String    @unique
  fileAmount              String
  actionTaken             String
  dateAccepted            DateTime
  dateAssigned            DateTime?
  fileLocation            String?
  dateAppraised           DateTime?
  dateDBRecommended       DateTime?
  datePSRecommended       DateTime?
  dateApproved            DateTime?
  dateRejected            DateTime?
  dateReturnedtoGroup     DateTime?
  dateReturnedtoRegistry  DateTime?
  dateReturnedtoMDA       DateTime?
  dateRegistryRecieved    DateTime?
  dateGroupReceived       DateTime?
  dateCompleted           DateTime?
  groupDays               Int?
  dateDBReceived          DateTime?
  dbDays                  Int?
  datePSReceived          DateTime?
  psDays                  Int?
  dateCommissonerReceived DateTime?
  commissionerDays        Int?
  totalDays               Int?
}

```

#### User Info
```
model User {
 id            String       @default(cuid()) @id
 token         String       @unique
 name          String?
 email         String?   @unique
 files         filerecords[]
}
```

#### Activity Logs
```

model ActivityLogs {
  id         String   @id @default(cuid())
  date       DateTime
  fileName   String
  fileNumber String
  action     String
  user       String
}
```

#### Process Summary
```

model DailySummary {
  id            String   @id @default(cuid())
  day           Int      @unique
  date          DateTime @unique @db.Date
  numberOfFiles Int
  completed     Int
  pending       Int
  returned      Int
}

model DailySummaryA {
  id            String   @id @default(cuid())
  date          DateTime @unique
  numberOfFiles Int
  completed     Int
  pending       Int
  returned      Int
}

model DailySummaryB {
  id            String   @id @default(cuid())
  date          DateTime @unique
  numberOfFiles Int
  completed     Int
  pending       Int
  returned      Int
}

model DailySummaryC {
  id            String   @id @default(cuid())
  date          DateTime @unique
  numberOfFiles Int
  completed     Int
  pending       Int
  returned      Int
}

model DailySummaryD {
  id            String   @id @default(cuid())
  day           Int      @unique
  date          DateTime
  numberOfFiles Int
  completed     Int
  pending       Int
  returned      Int
}

model MonthlySummary {
  id            String @id @default(cuid())
  date          String
  numberOfFiles Int
  completed     Int
  pending       Int
  returned      Int
}

model MonthlySummaryA {
  id            String @id @default(cuid())
  date          String
  numberOfFiles Int
  completed     Int
  pending       Int
  returned      Int
}

model MonthlySummaryB {
  id            String @id @default(cuid())
  date          String
  numberOfFiles Int
  completed     Int
  pending       Int
  returned      Int
}

model MonthlySummaryC {
  id            String @id @default(cuid())
  date          String
  numberOfFiles Int
  completed     Int
  pending       Int
  returned      Int
}

model MonthlySummaryD {
  id            String @id @default(cuid())
  date          String
  numberOfFiles Int
  completed     Int
  pending       Int
  returned      Int
}

model Issues {
  id         String   @id @default(cuid())
  issue      String
  location   String
  fileNumber String
  status     String
  dateIn     DateTime
  dateOut    DateTime
}

model Notifications {
  id      String   @id @default(cuid())
  for     String
  message String
  date    DateTime
}

```

### Functionality
#### QSS
- Inputs files (Sends e receipt to that effect)
- can see all files
- can see summary of the files
- can edit all file info
- receives notifications for file info corrections

#### Registry
- assigns files to corresponding groups 
- can see current location 
- will receive returned or completed files 
- has a summary page for files worked on
- receives notifications to that effect

#### Groups A - D
- ammends file actions (Recommend, Not Recommended)
- can see current location 
- can see every file in the system 
- has a summary page for files worked on
- receives notifications to that effect

#### DB and PS commissioner
- ammends file actions (Recommend, Not Recommended)
- can see current location 
- can see every file in the system 
- has a summary page for files worked on
- receives notifications to that effect

#### Commissioner
- ammends file actions (Accepted, Not Accepted)
- can see current location 
- can see every file in the system, this table must be exhaustive like a spreadsheet
- has a summary page for files worked on
- receives notifications to that effect

## App Structure
This static recreation contains the prototype ui components structure split into a multiple static pages

```
├───assets
│   ├───css
│   ├───js
│   └───svg
└───dashboard
    ├───bit-admin
    ├───commissioner
    ├───director-budget
    ├───permanent-secretary
    ├───qss
    └───registry
```

Components missing from the recreation are the action modals but they are provided in the app screenshot presented