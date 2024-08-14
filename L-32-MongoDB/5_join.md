#Learning to apply joins in mongodb
1. create students collection
2. create address collection

Sample Data

-db.address.insertMany([
     {
    _id: ObjectId('66bcc2c113313903bb228fb9'),
    details: 'Palampur, Himachal Pradesh'
  },
  {
    _id: ObjectId('66bcc2c113313903bb228fba'),
    details: 'Hamirpur, Himachal Pradesh'
  },
  {
    _id: ObjectId('66bcc2c113313903bb228fbb'),
    details: 'Bilaspur, Himachal Pradesh'
  }
]);

-db.students.insertMany([
     {
    _id: ObjectId('66bcc3c513313903bb228fbc'),
    name: 'Chandan',
    age: 28,
    subject: 'C++',
    marks: 90,
    a_id: ObjectId('66bcc2c113313903bb228fb9')
  },
  {
    _id: ObjectId('66bcc3c513313903bb228fbd'),
    name: 'Himanshu',
    age: 20,
    subject: 'OS',
    marks: 70,
    a_id: ObjectId('66bcc2c113313903bb228fba')
  },
  {
    _id: ObjectId('66bcc3c513313903bb228fbe'),
    name: 'Harsh',
    age: 22,
    subject: 'CP',
    marks: 90,
    a_id: ObjectId('66bcc2c113313903bb228fbb')
  }
])

<!-- 
    {
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}
 -->

 <!-- Query -->
 db.students.aggregate([
    {
        $lookup:{
            from : "address",
            localField: "a_id",
            foreignField: "_id",
            as: "Address_Details"
        }
    }
 ])