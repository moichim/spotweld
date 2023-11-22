import { IndexOf } from "@/utils/types/indexOf";
import NodeDefinition, { ConnectionDefinitionType } from "./nodeDefinition";
import DiagramNode from "../nodes/DiagramNode";

class DiagramFactory {

    // Static utils

    public static columnWidth = 200;
    public static topStep = 30;
    public static gap = 50;

    public static x = 30;
    public static y = 60;

    public static calculateXFromColumn = (column: number) => {
        return DiagramFactory.x + (column * DiagramFactory.columnWidth) + (column * DiagramFactory.gap);
    }

    public static calculateYFromStep = (topStep: number) => {
        return DiagramFactory.y + (topStep * DiagramFactory.topStep) + (topStep * DiagramFactory.gap);
    }

    // Factory

    protected nodes: IndexOf<NodeDefinition> = {}

    public addNode(
        id: string,
        column: number,
        top: number
    ) {
        const node = NodeDefinition.normal(id, column, top);
        this.nodes[id] = node;
        return node;
    }

    /** Must be called after all definitions complete. */
    public complete() {

        const edges = this.generateEdges();

        edges.forEach(edge => {
            if (this.nodes[edge.target]) {
                this.nodes[edge.target].markAsTarget();
            }
        });

    }

    getNodes() {

        return Object.values(this.nodes).map(v => v.getDefinition());

    }

    protected generateEdges() {
        return Object.values(this.nodes)
            .reduce((state, current) => {
                return [...state, ...current.getConnections()]
            }, [] as ConnectionDefinitionType[])
            .map(connection => {
                return {
                    ...connection,
                    animated: true,
                    markerEnd: {
                        color: "blue",
                        strokeWidth: 2,
                        fill: "yellow"
                    },
                    style: {
                        strokeWidth: 2,
                        stroke: "#fbcfe8"
                    }
                }
            }
            );
    }

    getEdges() {
        return this.generateEdges();
    }

    getImagesCount() {
        return Object.values(this.nodes).filter(n => n.getData().imagePath !== undefined).length;
    }

    getDiagram() {
        return {
            nodes: this.getNodes(),
            types: { base: DiagramNode },
            edges: this.getEdges(),
            imagesCount: this.getImagesCount()
        }
    }

    /** Generate the entire content */
    public static generateDefinitions() {
        const factory = new DiagramFactory();

        factory
            .addNode("prvni", 0, 0)
            .setSection("1. Zahřátí")
            .setTitle("Laser zahřeje okolí svaru")
            .setDescription("Okraj svaru je zahříván protože vlastnosti materiálu tam nejsou ovlivněny svarem.")
            .connect("druhy")
            .setImagePath("scanning.jpg")
            .connect("druhy");

        factory
            .addNode("druhy", 1, 0)
            .setSection("2. Měření")
            .setTitle("IR systém měří průběh ohřívání a chladnutí")
            .setDescription("Syrová data obsahují jsou zkreslena lokálními změnami emisivity v místě svaru")
            .setImagePath("original.gif")
            .connect("treti");

        factory
            .addNode("treti", 2, 0)
            .setSection("3. Machine-learning analýza")
            .setTitle("Kompenzujeme vliv emisivity")
            .setDescription("Algoritmus potlačí vliv emisivity v místě svaru a získá tak přesnou informaci o teplotě.")
            .setImagePath("emisfree.gif")
            .connect("ctvrty");

        factory
            .addNode("ctvrty", 3, 0)
            .setTitle("Kompenzujeme vliv emisivity")
            .setDescription("Analyzujeme celou plochu svaru (ne jen řez). Výstupem je sada údajů.")
            .setImagePath("Lines2.gif")
            .setContent("Průběh teploty svaru v jedné ose.")
            .connect("paty")
            .connect("sesty")
            .connect("sedmy")
            .connect("osmy");

        factory
            .addNode("paty", 4, 1.95)
            .setTitle("Množství odvedeného tepla")
            .setCss({ backgroundColor: "#f9a8d4" })
            .setColor("white")
            .connect("devaty");

        factory
            .addNode("sesty", 4, 3)
            .setTitle("Emisivita v místě svaru")
            .setCss({ backgroundColor: "#f9a8d4" })
            .setColor("white")
            .connect("devaty");

        factory
            .addNode("sedmy", 4, 3.75)
            .setTitle("Velikost svaru")
            .setCss({ backgroundColor: "#f9a8d4" })
            .setColor("white")
            .connect("devaty");

        factory
            .addNode("osmy", 4, 4.5)
            .setTitle("Velikost svarové čočky")
            .setCss({ backgroundColor: "#f9a8d4" })
            .setColor("white")
            .connect("devaty");

        factory
            .addNode("devaty", 5, 0)
            .setSection("4. Vyhodnocení")
            .setTitle("Vyhodnocení probíhá podle nastavených kritérií")
            .setDescription("V softwaru lze nastavit na základě jakých naměřených hodnot bude svar vyhodnocen.")
            .setImagePath("SW2.png")
            .setContent("Průběh teploty svaru v jedné ose.")
            .connect("desaty")
            .connect("jedenacty");

        factory
            .addNode("desaty", 6, 0)
            .setTitle("OK")
            .setCss({ backgroundColor: "green" })
            .setColor("white");

        factory
            .addNode("jedenacty", 6, 1)
            .setTitle("NOK")
            .setCss({ backgroundColor: "red" })
            .setColor("white");

        factory.complete();

        return factory.getDiagram();
    }

}

export default DiagramFactory;