import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/app/data/Information"



const CyberHacks = () => {
    return (
        <div className="relative w-full overflow-hidden bg-black rounded-xl mt-5 p-5">
            <div className="border-sky-500 border-3 rounded-xl p-5">
                <h1 className="text-4xl md:text-6xl font-bold mt-6 text-neon-blue text-center">Our Ethical Services</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {services.map((service) => (
                        <Card key={service.id} className="bg-black border-4 border-sky-500 text-neon-blue">
                            <CardHeader>
                                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-white">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CyberHacks;
