const features = [
    { title: 'Fresh Ingredients', icon: '🥦', desc: 'Only the best quality produce for every dish.' },
    { title: 'Fast Delivery', icon: '🚀', desc: 'Hot and delicious food delivered in minutes.' },
    { title: 'Affordable', icon: '💸', desc: 'Delicious meals at budget-friendly prices.' }
  ];
  
  export default function Features() {
    return (
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-10">Why Choose TastyBite?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="hover:scale-105 transition transform duration-300 p-6 border rounded-xl shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  