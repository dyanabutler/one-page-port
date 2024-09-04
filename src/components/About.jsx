// components/About.js
'use client';

export default function About() {
  return (
    <section className="col-span-1 p-2 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 font-inter">About Us</h2>
      <div className="mb-4">
        {/* <h3 className="font-semibold">BIO:</h3> */}
        <p>Dyana is an aspiring software developer and an experienced product designer.
        </p>
      </div>
      <div>
        <h3 className="font-semibold">STARRED IN:</h3>
        <ul className="list-disc ml-5">
          <li><a href="#" className="text-green-800">Link 1</a></li>
          <li><a href="#" className="text-green-800">Link 2</a></li>
        </ul>
      </div>
    </section>
  );
}
